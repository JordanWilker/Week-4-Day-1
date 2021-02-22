import { ProxyState } from "../AppState.js";
import { quizsService } from "../Services/QuizsService.js";


//Private
function _draw() {
  let quizs = ProxyState.quizs;
  let template = ''
  quizs.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <div className="card-columns quizs">
      ${template}
  </div>
  `
}

//Public
export default class QuizsController {
  constructor() {
    ProxyState.on("quizs", _draw);
    _draw()
  }

  wrong(){
    quizsService.wrong()
  }
  right(taskItemId){
    quizsService.right(taskItemId)
  }

}
