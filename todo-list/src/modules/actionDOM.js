import { modalDOM } from "./modalDOM";

class ActionDOM{
    constructor(){
        this.addProjectBtn = document.querySelector(".project__add-btn");

        this.addProjectBtn.addEventListener("click", ()=>{
            modalDOM.openProjectModal();
        });

        this.addTodoBtn = document.querySelector(".button__add");

        this.addTodoBtn.addEventListener("click", ()=>{
            modalDOM.openAddTodo();
        });
    }
}

export const actionDOM = new ActionDOM();