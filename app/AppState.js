import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  mySnacks = []
  shownSnack = null
  machineSnacks = [
    new Snack('Doritos', 1.00, 'A cheesy crunchy triangle.','https://m.media-amazon.com/images/I/81S5rKXF10L._SY879_.jpg'),
    new Snack('Hersheys', 1.00, 'Chocolate that goes good with graham crackers.','https://www.kroger.com/product/images/large/front/0003400019045'),
    new Snack('Candy Cane', 2.00, 'What a weird thing to have in here.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvnt5AMigw0RFo8loz3DBlmU6it0eZ59jaA&usqp=CAU'),
    new Snack('Gogurt', 1.25, 'It smells a bit rancid.','https://d25dk4h1q4vl9b.cloudfront.net/media/images/menu-content/DW/happy-meal/go-gurt-low-fat-strawberry-yogurt.png'),
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
