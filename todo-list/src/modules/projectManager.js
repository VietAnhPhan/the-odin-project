class ProjectManager{
    constructor(){
        this.projects = JSON.parse(localStorage.getItem("projects")) || [];
        this.selectedProjectIndex = 0;
    }



    getProjects(){
        return this.projects;
    }

    addProject(project){
        this.projects.push(project);
        this.save();
    }

    deleteProject(project){
        this.projects.splice(this.projects.indexOf(project), 1);
        this.save();
    }

    setCompleted(todoIndex){
        this.projects[this.selectedProjectIndex].todos[todoIndex].completed = !this.projects[this.selectedProjectIndex].todos[todoIndex].completed;
        this.save();
    }

    setPriority(projectIndex, todoIndex){
        this.projects[projectIndex].todos[todoIndex].priority = !this.projects[projectIndex].todos[todoIndex].priority;
        this.save();
    }
    // setPriority

    save(){
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }

    addTodo(projectIndex, todo){
        this.projects[projectIndex].todos.push(todo);
        this.save();
    }

    setprojectSelected(index){
        this.selectedProjectIndex = index;
    }

    getSelectedProject(){
        return this.selectedProjectIndex;
    }

}

export const projectManager = new ProjectManager();