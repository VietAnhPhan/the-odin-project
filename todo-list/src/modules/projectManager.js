class ProjectManager{
    constructor(){
        this.projects = JSON.parse(localStorage.getItem("projects")) || [];
        this.projectIndex = null;
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

    setCompleted(projectIndex, todoIndex){
        this.projects[projectIndex].todos[todoIndex].completed = !this.projects[projectIndex].todos[todoIndex].completed;
        this.save();
    }

    // setPriority

    save(){
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }
}

export const projectManager = new ProjectManager();