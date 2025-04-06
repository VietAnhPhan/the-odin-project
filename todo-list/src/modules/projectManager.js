class ProjectManager{
    constructor(){
        this.projects = JSON.parse(localStorage.getItem("projects")) || [];
        
    }

    getProjects(){
        return this.projects;
    }



    save(){
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }
}

export const projectManager = new ProjectManager();