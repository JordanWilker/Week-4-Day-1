import QuizsController from "./Controllers/QuizsController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  quizsController = new QuizsController();
}

window["app"] = new App();
