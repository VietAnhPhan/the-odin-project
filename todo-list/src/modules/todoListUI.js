import fillStarButton from '../../assets/icons/star-fill.svg';
import hollowStarButton from '../../assets/icons/star-hollow.svg';
import deleteButton from '../../assets/icons/rubbish-bin.svg';
import ModalUI from './ModalUI';

export default class ToDoListUI {

    constructor(project) {
        // this.projectName = project.title;
        this.project = project;
        this.projectTitle = document.querySelector(".project__title");
        this.todoList = document.querySelector(".todo__list");
        this.addBtn = document.querySelector(".button__add");
        this.modalUI = new ModalUI();

        this.display(project);
        this.attachEvent();
    }

    attachEvent() {
        this.addBtn.addEventListener("click", () => {
            this.modalUI.openAddTodo(this.add.bind(this));
        });
    }

    display(project) {
        this.todoList.textContent = "";
        this.projectTitle.textContent = project.title;

        for (const todo of project.todos) {
            this.addToListElement(todo);
        }
    }


    add(newTodo) {
        newTodo.project = this.project.title;

        this.project.todos.push(newTodo);
        this.addToListElement(newTodo);
    }

    addToListElement(todo) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const title = document.createElement("span");
        const prorityStatus = document.createElement("img");
        const deleteBtn = document.createElement("img");

        checkbox.type = "checkbox";



        title.textContent = todo.title;

        title.classList.add("todo__title");
        checkbox.classList.add("todo__checkbox");
        prorityStatus.classList.add("todo__priority");

        deleteBtn.classList.add("button__action");
        li.classList.add("todo", "flex", "gap-10", "align-center");

        deleteBtn.setAttribute("src", deleteButton);

        if (todo.completed) {
            checkbox.checked = true;
            title.classList.add("todo__status_done");
        }

        if (todo.priority) {
            prorityStatus.setAttribute("src", fillStarButton);

        } else {
            prorityStatus.setAttribute("src", hollowStarButton);
        }

        checkbox.addEventListener("click", (event) => {
            event.stopPropagation();
            if (!title.classList.contains("todo__status_done")) {

                title.classList.add("todo__status_done");
                todo.completed = true;

            } else {

                title.classList.remove("todo__status_done");
                todo.completed = false;

            }

        });


        prorityStatus.addEventListener("click", (event) => {
            event.stopPropagation();
            if (prorityStatus.getAttribute("src") == fillStarButton) {
                todo.priority = false;
                prorityStatus.setAttribute("src", hollowStarButton);
            }
            else {
                todo.priority = true;
                prorityStatus.setAttribute("src", fillStarButton);
            }
        });

        li.addEventListener("click", (event) => {

            this.modalUI.openEditTodo({
                todo: todo,
                el: event.currentTarget,
                hollow_star: hollowStarButton,
                fill_star: fillStarButton
            });

        });



        deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            // console.log(this.project);
            this.project.todos.splice(this.project.todos.indexOf(todo), 1);
            li.remove();
        });

        li.append(checkbox, title, prorityStatus, deleteBtn);

        this.todoList.appendChild(li);
    }
}


