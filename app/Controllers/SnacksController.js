import { ProxyState } from "../AppState.js";
import { snackCardService } from "../Services/SnackCardService.js";

//Private
function _drawMachineSnacks() {
  let template = ''
  ProxyState.machineSnacks.forEach(snack => {
       template +=/*HTML*/`
       <button type="button" class="btn btn-primary m-3 " onclick="app.snacksController.selectSnack('${snack.name}')">${snack.name}</button> 
  `
  });
  
  document.getElementById("machineSnacksHTML").innerHTML = template

}

export default class SnacksController {
  constructor() {
    ProxyState.on("machineSnacks", _drawMachineSnacks);
    _drawMachineSnacks()
  }

  selectSnack(selectedSnack){
      console.log(ProxyState.machineSnacks)
      snackCardService.selectSnack(selectedSnack)
  }

}