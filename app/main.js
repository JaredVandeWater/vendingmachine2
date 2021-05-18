import SnacksController from "./Controllers/SnacksController.js";
import SnackCardController from "./Controllers/SnackCardController.js";
import CashController from "./Controllers/CashController.js";


class App {
  snacksController = new SnacksController();
  snackCardController = new SnackCardController();
  cashController = new CashController();
}

window["app"] = new App();
