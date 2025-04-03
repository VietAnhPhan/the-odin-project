import './style.css';
import Project from './modules/project';
import UI from './modules/ui';


const projects =
    [
        new Project('project 1',
            [{ title: 'morning breakfast', description: 'increase calories', dueDate: '03-30-2026', priority: true, project: 'project 1', completed: false },
            { title: 'morning gym', description: 'push training', dueDate: '03-30-2026', priority: true, project: 'project 1', completed: true }]
        ),
        new Project('project 2', [{ title: 'IELTS test', description: 'get up early', dueDate: '03-22-2026', priority: true, project: 'project 2', completed: false },
        { title: 'Phu Yen retreat', description: '1 week vacation', dueDate: '05-30-2026', priority: false, project: 'project 2', completed: true }]),
        new Project('project 3')
    ];

const ui = new UI(projects);
