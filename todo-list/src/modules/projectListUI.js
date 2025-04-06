import ModalUI from "./ModalUI";
import ToDoListUI from "./todoListUI";
import deleteIcon from "../../assets/icons/rubbish-bin.svg";
import Project from "./project";
import { projectManager } from "./projectManager";

export default class ProjectListUI {
    constructor(projects) {
        const projectsStorage = localStorage.getItem("projects");
        this.projects = projectsStorage ? JSON.parse(projectsStorage) : [];
        this.projects= this.projects.map(project => new Project (project.title, project.todos));
        console.log(this.projects);
        // localStorage.setItem("projects", JSON.stringify(this.projects));
        this.projectList = document.querySelector(".project__list");
        this.addProjectBtn = document.querySelector(".project__add-btn");
        this.deleteIcon = deleteIcon;
        this.ModalUI = new ModalUI();
        this.todoListUI = new ToDoListUI(this.projects);

        this.init();
        this.render();
    }

    init() {
        this.addProjectBtn.addEventListener("click", () => this.ModalUI.openProjectModal(
        
               this
        
        ));
    }

    render() {
        const projects = projectManager.getProjects();
          
        for (let project of projects) {
            const li = document.createElement("li");
            const title = document.createElement("span");
            const deleteBtn = document.createElement("img");

            deleteBtn.setAttribute("src", deleteIcon);
            li.classList.add("project__list-item")
            deleteBtn.classList.add("button__action");
            title.textContent = project.title;

        

            li.append(title, deleteBtn);

            deleteBtn.addEventListener("click", (event) => {
             
                projects.splice(projects.indexOf(project), 1);
                console.log( projects);
                li.remove();
                localStorage.setItem("projects", JSON.stringify(projects));
                event.stopPropagation();
            
            });

            li.addEventListener("click", () => {
                console.log("bubbling")
                // const todoListUI = new ToDoListUI(project);
            });


            this.projectList.appendChild(li);
        }
    }

    add(newProject) {
        this.projects.push(newProject);
        localStorage.setItem("projects", JSON.stringify(this.projects));

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
                // const todoListUI = new ToDoListUI(newProject);
                // this.todoListUI.display(newproject);
            });


            this.projectList.appendChild(li);
    }

}