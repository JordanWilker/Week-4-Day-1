import {generateId} from "../Utils/GenerateId.js"

export default class Quiz {
    constructor(data,id=generateId()) {
        this.category = data.category
        this.question = data.question
        this.incorrect_answers = data.incorrect_answers
        this.correct_answer = data.correct_answer
        this.id = id
    }

    get Template() {
        let randomAnswer = Math.ceil(Math.random()*4)
        if(randomAnswer ==1){
            return /*html*/`
            <div class="card p-2" id='${this.id}'>
                ${this.question}
                Options: <br> <button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[0]}</button>   <br> <button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[1]}</button>   <br><button class="btn btn-info"onclick="app.quizsController.right('${this.id}')">${this.correct_answer}</button> <br> <button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[2]}</button>
            </div>
            `
        }else if(randomAnswer ==2){
            return /*html*/`
            <div class="card p-2" id='${this.id}'>
                ${this.question}
                Options: <br> <button class="btn btn-info"onclick="app.quizsController.right('${this.id}')">${this.correct_answer}</button>   <br> <button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[1]}</button>   <br><button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[0]}</button> <br> <button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[2]}</button>
            </div>
            `
        } else if(randomAnswer ==3){
            return /*html*/`
            <div class="card p-2" id='${this.id}'>
                ${this.question}
                Options: <br> <button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[0]}</button>   <br> <button class="btn btn-info"onclick="app.quizsController.right('${this.id}')">${this.correct_answer}</button>   <br><button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[1]}</button> <br> <button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[2]}</button>
            </div>
            `
        }else{
            return /*html*/`
            <div class="card p-2" id='${this.id}'>
                ${this.question}
                Options: <br> <button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[0]}</button>   <br> <button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[1]}</button>   <br><button class="btn btn-info"onclick="app.quizsController.wrong()">${this.incorrect_answers[2]}</button> <br> <button class="btn btn-info"onclick="app.quizsController.right('${this.id}')">${this.correct_answer}</button>
            </div>
            `
        }
    }
}
