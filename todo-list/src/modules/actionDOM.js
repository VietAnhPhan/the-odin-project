import { modalDOM } from "./modalDOM";

class ActionDOM{
    constructor(){
        this.addProjectBtn = document.querySelector(".project__add-btn");

        this.addProjectBtn.addEventListener("click", ()=>{
            modalDOM.openProjectModal();
        });
    }
}

export const actionDOM = new ActionDOM();