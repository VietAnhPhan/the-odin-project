import Project from "./project";
import Todo from "./todo";
import { format } from "date-fns";


export default class ModalUI {
    constructor() {
        // this.onAddProject = onAddProject;
        this.projectListUI = null;
        this.todoListUI = null;
        
        this.dialog = document.createElement("dialog");
        this.title = document.createElement("span");
        this.form = document.createElement("form");
        this.projectTitle = document.createElement("input");
        this.addBtn = document.createElement("button");
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
        this.todoAddBtn = document.createElement("button");
        this.todoEditBtn = document.createElement("button");
        this.closeTodoModalBtn = document.createElement("button");

        this.attachEvents();
        this.initProjectModal();
        this.initTodoModal();
    }
    attachEvents(){
        this.todoAddBtn.addEventListener("click", (event)=>{
            event.preventDefault();
        
            const newTodo = new Todo(
                this.todoTitle.value,
                this.todoDescription.value,
                this.todoDueDate.value,
                this.isTodoPriority.checked
    
            );

            this.todoListUI.add(newTodo);
            this.todoForm.reset();
            this.todoDialog.close();
        });
        // this.todoEditBtn = document.createElement("button");
    }

    initProjectModal() {

        this.title.textContent = "Create new project";
        this.projectTitle.type = "text";
        this.projectTitle.placeholder = "Enter your project name";
        this.addBtn.textContent = "Create project";
        this.addBtn.type = "button";
        this.closeModalBtn.textContent = "Close";
      
        this.closeModalBtn.addEventListener("click", () => {
           
            this.dialog.classList.remove("flex", "flex-column", "gap-10");
            this.dialog.close();
        })

        this.addBtn.addEventListener("click", (event) => {
            event.preventDefault();

            const newProject = new Project(this.projectTitle.value);
        
            this.projectListUI.add(newProject);

            console.log(this.projectListUI.projects);
            this.dialog.classList.remove("flex", "flex-column", "gap-10");
            this.form.reset();
            this.dialog.close();
    
        });

        this.form.append(this.projectTitle, this.addBtn);
        this.dialog.append(this.title, this.form, this.closeModalBtn);

        document.body.appendChild(this.dialog);

    }

    initTodoModal() {
        this.closeTodoModalBtn.classList.add("button__close");

        this.closeTodoModalBtn.addEventListener("click", () => {
            this.todoForm.reset();
            this.todoDialog.close();
        })

        const priorityDiv = document.createElement("div");
        priorityDiv.append(this.isTodoPriorityLabel, this.isTodoPriority);
        this.todoForm.append(this.todoTitleLabel, this.todoTitle, this.todoDescriptionLabel, this.todoDescription, this.todoDueDateLabel, this.todoDueDate, priorityDiv, this.todoAddBtn);

        this.todoDialog.append(this.todoModalTitle, this.todoForm, this.closeTodoModalBtn);

        document.body.appendChild(this.todoDialog);

    }

    openProjectModal(projectListUI) {

        this.dialog.classList.add("flex", "flex-column", "gap-10");
        this.dialog.showModal();
        this.projectListUI = projectListUI;
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
        this.todoAddBtn.textContent = "Create Todo";
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