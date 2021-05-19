import SnacksController from "./Controllers/SnacksController.js";
import SnackCardController from "./Controllers/SnackCardController.js";
import CashController from "./Controllers/CashController.js";
import MySnacksController from "./Controllers/MySnacksController.js";


class App {
  snacksController = new SnacksController();
  snackCardController = new SnackCardController();
  cashController = new CashController();
  mySnacksController = new MySnacksController();
}

window["app"] = new App();
