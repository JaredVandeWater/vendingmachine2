import { ProxyState } from "../AppState.js";


//Private
function _drawCash() {
  let template = ''
    template =`${ProxyState.cash.toFixed(2)}
  `
  document.getElementById("cashHTML").innerHTML = template

  };



export default class CashController {
  constructor() {
    ProxyState.on("cash", _drawCash);
    _drawCash()
  }  

}