import ModalUI from "./ModalUI";
import ToDoListUI from "./todoListUI";
import deleteIcon from "../../assets/icons/rubbish-bin.svg";

export default class ProjectListUI {
    constructor(projects) {
        this.projects = projects;
        this.projectList = document.querySelector(".project__list");
        this.addProjectBtn = document.querySelector(".project__add-btn");

        this.ModalUI = new ModalUI(this.add.bind(this));

        this.init();
        this.display();
    }

    init() {
        this.addProjectBtn.addEventListener("click", () => this.ModalUI.openProjectModal());
    }

    display() {

        for (let project of this.projects) {
            const li = document.createElement("li");
            const title = document.createElement("span");
            const deleteBtn = document.createElement("img");

            deleteBtn.setAttribute("src", deleteIcon);
            li.classList.add("project__list-item")
            deleteBtn.classList.add("button__action");
            title.textContent = project.title;

        

            li.append(title, deleteBtn);

            deleteBtn.addEventListener("click", (event) => {
             
                this.projects.splice(this.projects.indexOf(project), 1);
                console.log( this.projects);
                li.remove();
                event.stopPropagation();
            
            });

            li.addEventListener("click", () => {
                console.log("bubbling")
                const todoListUI = new ToDoListUI(project);
            });


            this.projectList.appendChild(li);
        }
    }

    add(newProject) {
        this.projects.push(newProject);

        // const li = document.createElement("li");
        // li.textContent = newProject.title;
        // this.projectList.appendChild(li);

        const li = document.createElement("li");
            const title = document.createElement("span");
            const deleteBtn = document.createElement("img");

            deleteBtn.setAttribute("src", deleteIcon);
            li.classList.add("project__list-item")
            deleteBtn.classList.add("button__action");
            title.textContent = newProject.title;

        

            li.append(title, deleteBtn);

            deleteBtn.addEventListener("click", (event) => {
             
                this.projects.splice(this.projects.indexOf(newProject), 1);
                console.log( this.projects);
                li.remove();
                event.stopPropagation();
            
            });

            li.addEventListener("click", () => {
                console.log("bubbling")
                const todoListUI = new ToDoListUI(newProject);
            });


            this.projectList.appendChild(li);
    }

}