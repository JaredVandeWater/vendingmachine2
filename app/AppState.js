import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  mySnacks = []
  shownSnack = null
  machineSnacks = [
    new Snack('Doritos', 1.00, 'A cheesy crunchy triangle.','https://m.media-amazon.com/images/I/81S5rKXF10L._SY879_.jpg'),
    new Snack('Hersheys', 1.00, 'Chocolate that goes good with graham crackers.','https://www.kroger.com/product/images/large/front/0003400019045'),
    new Snack('Candy Cane', 2.00, 'What a weird thing to have in here.','https://static.wikia.nocookie.net/the_candy_encyclopedia/images/a/a7/Candy_Cane.jpg/revision/latest?cb=20200516173226'),
    new Snack('Gogurt', 1.25, 'It smells a bit rancid.','https://static.wikia.nocookie.net/ronaldmcdonald/images/4/43/T-mcdonalds-Go-GURT-Strawberry-Flavored-Low-Fat-Yogurt-Tube.jpg/revision/latest/top-crop/width/360/height/450?cb=20200309015313'),
    new Snack('Raisins', 1.50, 'Some super dried out grapes.', 'https://images.albertsons-media.com/is/image/ABS/960068917?$ecom-pdp-desktop$&defaultImage=Not_Available'),
  ]
  cash = 100.00
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
