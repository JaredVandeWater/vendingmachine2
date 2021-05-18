import { ProxyState } from "../AppState.js";

export class SnackCardService{
    selectSnack(selectedSnack){
        let foundSnack = ProxyState.machineSnacks.find(s=> s.name == selectedSnack)
        ProxyState.shownSnack=foundSnack
        console.log(ProxyState.shownSnack);
    }
    buySnack(price){
        if (price<= ProxyState.cash){
            ProxyState.cash -= price
        }
    }
}

export const snackCardService = new SnackCardService();