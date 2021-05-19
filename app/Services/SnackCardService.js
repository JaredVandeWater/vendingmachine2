import { ProxyState } from "../AppState.js";

export class SnackCardService{
    selectSnack(selectedSnack){
        let foundSnack = ProxyState.machineSnacks.find(s=> s.name == selectedSnack)
        ProxyState.shownSnack=foundSnack
        console.log(ProxyState.shownSnack);
    }
    buySnack(price, name){
        if (price<= ProxyState.cash){
            ProxyState.cash -= price
            ProxyState.mySnacks.push(name)
            console.log(ProxyState.mySnacks);
            ProxyState.mySnacks=ProxyState.mySnacks
        }
    }
}

export const snackCardService = new SnackCardService();