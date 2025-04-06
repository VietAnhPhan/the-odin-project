import Project from "./project";
import Todo from "./todo";
import { format } from "date-fns";
import { projectListDOM } from "./projectListDOM";
import { projectManager } from "./projectManager";
import { todoListDOM } from "./todoListDOM";

class ModalDOM {
    constructor() {
        // this.onAddProject = onAddProject;
        this.projectListUI = null;
        this.todoListUI = null;

        this.projectDialog = document.createElement("dialog");
        this.projectTitleSpan = document.createElement("span");
        this.addProjectForm = document.createElement("form");
        this.projectTitleInput = document.createElement("input");
        this.addProjectBtn = document.createElement("button");
        this.closeModalBtn = document.createElement("button");


        // Add Todo Dialog
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
        this.todoEditBtn = document.createElement("button");
        this.closeTodoModalBtn = document.createElement("button");

        this.attachEvents();
        this.initProjectModal();
        this.initTodoModal();
    }
    attachEvents() {
        this.addTodoBtn.addEventListener("click", (event) => {
            event.preventDefault();

            const newTodo = new Todo(
                this.todoTitle.value,
                this.todoDescription.value,
                this.todoDueDate.value,
                this.isTodoPriority.checked

            );

            todoListDOM.addTodo(newTodo);
            this.todoForm.reset();
            this.todoDialog.close();
        });
        // this.todoEditBtn = document.createElement("button");
    }

    initProjectModal() {

        this.projectTitleSpan.textContent = "Create new project";
        this.projectTitleInput.type = "text";
        this.projectTitleInput.placeholder = "Enter your project name";
        this.addProjectBtn.textContent = "Create project";
        this.addProjectBtn.type = "button";
        this.closeModalBtn.textContent = "Close";

        this.closeModalBtn.addEventListener("click", () => {

            this.projectDialog.classList.remove("flex", "flex-column", "gap-10");
            this.projectDialog.close();
        })

        this.addProjectBtn.addEventListener("click", (event) => {
            event.preventDefault();

            const newProject = new Project(this.projectTitleInput.value);

            projectListDOM.addProject(newProject);

            this.projectDialog.classList.remove("flex", "flex-column", "gap-10");
            this.addProjectForm.reset();
            this.projectDialog.close();

        });

        this.addProjectForm.append(this.projectTitleInput, this.addProjectBtn);
        this.projectDialog.append(this.projectTitleSpan, this.addProjectForm, this.closeModalBtn);

        document.body.appendChild(this.projectDialog);

    }

    initTodoModal() {
        this.closeTodoModalBtn.classList.add("button__close");

        this.closeTodoModalBtn.addEventListener("click", () => {
            this.todoForm.reset();
            this.todoDialog.close();
        })

        const priorityDiv = document.createElement("div");
        priorityDiv.append(this.isTodoPriorityLabel, this.isTodoPriority);
        this.todoForm.append(this.todoTitleLabel, this.todoTitle, this.todoDescriptionLabel, this.todoDescription, this.todoDueDateLabel, this.todoDueDate, priorityDiv, this.addTodoBtn);

        this.todoDialog.append(this.todoModalTitle, this.todoForm, this.closeTodoModalBtn);

        document.body.appendChild(this.todoDialog);

    }

    openProjectModal() {

        this.projectDialog.classList.add("flex", "flex-column", "gap-10");
        this.projectDialog.showModal();
        // this.projectListUI = projectListUI;
        // form.addEventListener("submit", (event) => { this.handleSubmit });

    }

    openAddTodo(todoListUI) {
        this.todoForm.classList.add("flex", "flex-column", "gap-10");
        this.todoModalTitle.textContent = "Create new Todo";
        this.todoTitleLabel.textContent = "Title";
        this.todoTitle.type = "text";
        this.todoDescriptionLabel.textContent = "Description";
        this.todoDescription.placeholder = "Title";
        this.todoDueDateLabel.textContent = "Due date";
        this.todoDueDate.type = "date";
        this.isTodoPriorityLabel.textContent = "Is Priority?";
        this.isTodoPriority.type = "checkbox";
        this.isTodoPriority.value = "yes";
        this.addTodoBtn.textContent = "Create Todo";
        this.closeTodoModalBtn.textContent = "Close";
        this.todoListUI = todoListUI;
        // this.todoBtn.addEventListener("click", this.addTodo.bind(this, onAddProject));

        this.todoDialog.showModal();
    }

    openEditTodo(args) {
        // console.log(args);
        // console.log(format(todo.dueDate, 'yyyy-MM-dd'));
        this.todoForm.classList.add("flex", "flex-column", "gap-10");
        this.todoModalTitle.textContent = "Edit Todo";
        this.todoTitleLabel.textContent = "Title";
        this.todoDescriptionLabel.textContent = "Description";
        this.todoDueDateLabel.textContent = "Due date";
        this.isTodoPriorityLabel.textContent = "Is Priority?";
        this.todoBtn.textContent = "Save Todo";
        this.closeTodoModalBtn.textContent = "Close";

        this.todoTitle.type = "text";
        this.todoDueDate.type = "date";
        this.isTodoPriority.type = "checkbox";


        this.todoTitle.value = args.todo.title;
        this.todoDescription.textContent = args.todo.description;
        this.todoDueDate.value = format(args.todo.dueDate, 'yyyy-MM-dd');
        this.isTodoPriority.checked = args.todo.priority;
        // console.log(fillStarButton);

        const handleTodoBtn = (event) => {
            event.preventDefault();

            args.todo.title = this.todoTitle.value;
            args.todo.description = this.todoDescription.value;
            args.todo.dueDate = this.todoDueDate.value;
            args.todo.priority = this.isTodoPriority.checked;

            args.el.querySelector(".todo__title").textContent = args.todo.title;
            args.el.querySelector(".todo__priority").src = args.todo.priority ? args.fill_star : args.hollow_star;


            this.todoBtn.removeEventListener("click", handleTodoBtn);
            this.todoForm.reset();
            this.todoDialog.close();
        }

        this.todoBtn.addEventListener("click", handleTodoBtn);

        this.todoDialog.showModal();
    }


    addProject(event) {

    }

    // addTodo(onAddProject, event) {
    //     event.preventDefault();

    //     const newTodo = new Todo(
    //         this.todoTitle.value,
    //         this.todoDescription.value,
    //         this.todoDueDate.value,
    //         this.isTodoPriority.checked

    //     );

    //     onAddProject(newTodo)


    //     this.todoDialog.close();
    // }
}

export const modalDOM = new ModalDOM();