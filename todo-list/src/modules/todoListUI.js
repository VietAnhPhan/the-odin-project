import fillStarButton from '../../assets/icons/star-fill.svg';
import hollowStarButton from '../../assets/icons/star-hollow.svg';
import deleteButton from '../../assets/icons/rubbish-bin.svg';
import ModalUI from './ModalUI';

export default class ToDoListUI {

    constructor(project) {
        // this.projectName = project.title;
        this.project = project;
        this.projectTitle = document.querySelector(".project__title");
        this.todoList = document.querySelector(".project__todo-list");
        this.addBtn = document.querySelector(".button__add");
        this.modalUI = new ModalUI(this.add.bind(this));

        this.display(project);
        this.attachEvent();
    }

    attachEvent() {
        this.addBtn.addEventListener("click", () => {
            this.modalUI.openTodoModal();
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
        // const li = document.createElement("li");
        // const checkbox = document.createElement("input");
        // const title = document.createElement("span");
        // const prorityStatus = document.createElement("img");
        // const deleteBtn = document.createElement("img");

        // checkbox.type = "checkbox";


        // title.textContent = newTodo.title;
        // // console.log(newTodo);
        // prorityStatus.classList.add("button__action");
        // deleteBtn.classList.add("button__action");

        // deleteBtn.setAttribute("src", deleteButton);

        // if (newTodo.completed) {
        //     checkbox.checked = true;
        //     title.classList.add("todo__status_done");
        // }

        // if (newTodo.priority) {
        //     prorityStatus.setAttribute("src", fillStarButton);

        // } else {
        //     prorityStatus.setAttribute("src", hollowStarButton);
        // }

        // checkbox.addEventListener("click", () => {
        //     if (!title.classList.contains("todo__status_done")) {
        //         title.classList.add("todo__status_done");
        //         newTodo.completed = true;

        //     } else {
        //         title.classList.remove("todo__status_done");
        //         newTodo.completed = false;

        //     }

        // });


        // prorityStatus.addEventListener("click", () => {
        //     if (prorityStatus.getAttribute("src") == fillStarButton) {
        //         todo.priority = false;
        //         prorityStatus.setAttribute("src", hollowStarButton);
        //     }
        //     else {
        //         todo.priority = true;
        //         prorityStatus.setAttribute("src", fillStarButton);
        //     }
        // });



        // li.append(checkbox, title, prorityStatus, deleteBtn);

        // deleteBtn.addEventListener("click", () => {
        //     project.todos.splice(project.todos.indexOf(todo), 1);
        //     li.remove();
        // });

        // this.todoList.appendChild(li);
    }

    addToListElement(todo) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const title = document.createElement("span");
        const prorityStatus = document.createElement("img");
        const deleteBtn = document.createElement("img");

        checkbox.type = "checkbox";


        title.textContent = todo.title;
        prorityStatus.classList.add("button__action");
        deleteBtn.classList.add("button__action");

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

        checkbox.addEventListener("click", () => {
            if (!title.classList.contains("todo__status_done")) {
                title.classList.add("todo__status_done");
                todo.completed = true;

            } else {
                title.classList.remove("todo__status_done");
                todo.completed = false;

            }

        });


        prorityStatus.addEventListener("click", () => {
            if (prorityStatus.getAttribute("src") == fillStarButton) {
                todo.priority = false;
                prorityStatus.setAttribute("src", hollowStarButton);
            }
            else {
                todo.priority = true;
                prorityStatus.setAttribute("src", fillStarButton);
            }
        });



        li.append(checkbox, title, prorityStatus, deleteBtn);

        deleteBtn.addEventListener("click", () => {
            project.todos.splice(project.todos.indexOf(todo), 1);
            li.remove();
        });

        this.todoList.appendChild(li);
    }
}


