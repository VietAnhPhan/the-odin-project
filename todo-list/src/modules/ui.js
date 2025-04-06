import Project from "./project";
// import ModalUI from "./ModalUI";
import ToDoListUI from "./todoListUI";
import ProjectListUI from "./projectListUI";

export default class UI {
    constructor(projects) {
        // localStorage.setItem("projects", JSON.stringify(projects));
        this.projects = JSON.parse(localStorage.getItem("projects"));
        this.projectListUI = new ProjectListUI(this.projects);
        this.todoListUI = new ToDoListUI(this.projects[0]);
    }







    // handleSubmit() {
    //     event.preventDefault();

    //     // const li = document.createElement("li");
    //     // li.textContent = projectName;
    //     // this.projects.appendChild(li);

    //     // dialog.close();
    // }
}