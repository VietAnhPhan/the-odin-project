import Project from "./project";
import Todo from "./todo";

export default class ModalUI {
    constructor(onAddProject = null) {
        this.onAddProject = onAddProject;

        this.dialog = document.createElement("dialog");
        this.title = document.createElement("span");
        this.form = document.createElement("form");
        this.textbox = document.createElement("input");
        this.addBtn = document.createElement("button");
        this.closeModalBtn = document.createElement("button");

        this.todoDialog = document.createElement("dialog");
        this.todoModalTitle = document.createElement("h3");
        this.todoForm = document.createElement("form");
        this.todoTitleLabel = document.createElement("label");
        this.todoTitle = document.createElement("input");
        this.todoDescriptionLabel = document.createElement("label");
        this.todoDueDateLabel = document.createElement("label");
        this.todoDueDate = document.createElement("input");
        this.todoDescription = document.createElement("textarea");
        this.isTodoPriority = document.createElement("input");
        this.isTodoPriorityLabel = document.createElement("label");
        this.addTodoBtn = document.createElement("button");
        this.closeTodoModalBtn = document.createElement("button");

        this.initProjectModal();
        this.initTodoModal();
    }
    initProjectModal() {
        this.title.textContent = "Create new project";
        this.textbox.type = "text";
        this.textbox.placeholder = "Enter your project name";
        this.addBtn.textContent = "Create project";
        this.closeModalBtn.textContent = "Close";

        this.addBtn.addEventListener("click", this.addProject.bind(this));

        this.closeModalBtn.addEventListener("click", () => {
            this.dialog.close();
        })

        this.form.append(this.textbox, this.addBtn);
        this.dialog.append(this.title, this.form, this.closeModalBtn);

        document.body.appendChild(this.dialog);

    }

    initTodoModal() {
        this.todoModalTitle.textContent = "Create new Todo";
        this.todoTitleLabel.textContent = "Title";
        this.todoTitle.type = "text";
        this.todoDescriptionLabel.textContent = "Description";
        this.todoDescription.placeholder = "Title";
        this.todoDueDateLabel = "Due date";
        this.todoDueDate.type = "date";
        this.isTodoPriorityLabel = "Is Priority?";
        this.isTodoPriority.type = "checkbox";
        this.isTodoPriority.value = "yes";
        this.addTodoBtn.textContent = "Create Todo";
        this.closeTodoModalBtn.textContent = "Close";



        this.addTodoBtn.addEventListener("click", this.addTodo.bind(this));

        this.closeTodoModalBtn.addEventListener("click", () => {
            this.todoDialog.close();
        })

        this.todoForm.append(this.todoTitleLabel, this.todoTitle, this.todoDescriptionLabel, this.todoDescription, this.todoDueDateLabel, this.todoDueDate, this.isTodoPriorityLabel, this.isTodoPriority, this.addTodoBtn);

        this.todoDialog.append(this.todoModalTitle, this.todoForm, this.closeTodoModalBtn);

        document.body.appendChild(this.todoDialog);

    }


    openProjectModal() {

        this.dialog.showModal();

        // form.addEventListener("submit", (event) => { this.handleSubmit });

    }

    openTodoModal() {

        // this.title.textContent = "Create new Todo";
        // this.textbox.type = "text";
        // this.textbox.placeholder = "Title";
        // this.addBtn.textContent = "Create";
        // this.closeModalBtn.textContent = "Close";
        // this.todoDescriptionLabel.textContent = "Description";

        // this.addBtn.addEventListener("click", this.addProject.bind(this));

        // this.closeModalBtn.addEventListener("click", () => {
        //     this.dialog.close();
        // })

        // this.dialog.append(this.todoDescriptionLabel, this.description);


        this.todoDialog.showModal();
    }



    addProject(event) {
        event.preventDefault();
        // console.log(this.textbox.value);
        const newProject = new Project(this.textbox.value);

        this.onAddProject(newProject)

        this.dialog.close();
    }

    addTodo(event) {
        event.preventDefault();

        const newTodo = new Todo(
            this.todoTitle.value,
            this.todoDescription.value,
            this.todoDueDate.value,
            this.isTodoPriority.checked

        );

        this.onAddProject(newTodo)

        this.todoDialog.close();
    }
}