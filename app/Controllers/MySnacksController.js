import { ProxyState } from "../AppState.js";


//Private
function _drawMySnacks() {
  let template = ''
  ProxyState.mySnacks.forEach(snack => {
    template += /*HTML*/`
    <li class="list-group-item my-no-border">${snack}</li>
  `
  
  document.getElementById("mySnacksHTML").innerHTML = template

  });

}

export default class MySnacksController {
  constructor() {
    ProxyState.on("mySnacks", _drawMySnacks);
  }
  
}