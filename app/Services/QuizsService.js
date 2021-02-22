import { ProxyState } from "../AppState.js";
import Quiz from "../Models/Quiz.js";
import { api } from "./AxiosService.js";


class QuizsService {
  
    constructor(){
        this.getQuizs()
    }

    getQuizs() {
        api.get().then(res => {
            console.log(res)
            ProxyState.quizs = res.data.results.map(rawQuizData => new Quiz(rawQuizData))
            console.log(ProxyState.quizs);
            console.log(res.data.results)
        console.log("this does not run first")
        }).catch(err => console.error(err))
        console.log("this runs first")
    }
    wrong(){
        console.log("that is not correct")
        alert("Incorrect")
    }
    right(taskItemId){
        console.log("correct")
        alert("Correct")
        // let x = document.getElementById("${this.id}")
        // x.toggleAttribute("hidden")
        let temp = ProxyState.quizs
        let taskIndex = temp.findIndex(p => p.id == taskItemId)
        temp.splice(taskIndex, 1)
        ProxyState.quizs = temp

        }
    

}

export const quizsService = new QuizsService();

