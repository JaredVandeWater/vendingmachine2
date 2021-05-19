import { ProxyState } from "../AppState.js";
import { snackCardService } from "../Services/SnackCardService.js";

//Private
function _drawSnackCard() {
  let template = ''
    template = /*HTML*/`
    <div class="card m-5 my-card mx-auto">
    <img class="card-img-top my-snack-img mx-auto mt-3" src="${ProxyState.shownSnack.img}" alt="Card image cap">
        <div class="card-body">
        <div class="d-flex justify-content-between">
            <h5 class="card-title">${ProxyState.shownSnack.name}</h5>
            <p>$${ProxyState.shownSnack.price.toFixed(2)}</p>
        </div>
            <p class="card-text">${ProxyState.shownSnack.description}</p>
            <div class="d-flex justify-content-center">
            <a class="btn btn-primary text-center" onclick="app.snackCardController.buySnack('${ProxyState.shownSnack.price}', '${ProxyState.shownSnack.name}')">Buy</a>
            </div>
        </div>
    </div>
  `
  
  document.getElementById("snackCardHTML").innerHTML = template

  };



export default class SnacksController {
  constructor() {
    ProxyState.on("shownSnack", _drawSnackCard);
  }
    buySnack(price, name){
      snackCardService.buySnack(price, name)
    }
  

}