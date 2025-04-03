import Project from "./project";
// import ModalUI from "./ModalUI";
import ToDoListUI from "./todoListUI";
import ProjectListUI from "./projectListUI";

export default class UI {
    constructor(projects) {
        this.projects = projects;
        this.projectListUI = new ProjectListUI(projects);
        this.todoListUI = new ToDoListUI(projects[0]);
    }







    // handleSubmit() {
    //     event.preventDefault();

    //     // const li = document.createElement("li");
    //     // li.textContent = projectName;
    //     // this.projects.appendChild(li);

    //     // dialog.close();
    // }
}