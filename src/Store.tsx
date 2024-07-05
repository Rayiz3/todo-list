import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

type task = {
    id: number,
    isDone: boolean,
    task: string
};

type sectionTodo = {
    id: number,
    title: string,
    taskList: task[] | [],
};

const [sectionTodos, setSectionTodos] = createStore<sectionTodo[] | []>([]);
const [curSectionId, setCurSectionId] = createSignal(1);
const [curTaskId, setCurTaskId] = createSignal(1);

const storeManager = {

    getSectionTodos: () => sectionTodos,

    addSection: () => {
        setSectionTodos([...sectionTodos, {id: curSectionId(), title: 'Untitled', taskList: []}]);
        setCurSectionId(curSectionId() + 1);
    },

    removeSection: (id: number) => {
		setSectionTodos(sectionTodos.filter((sectionTodo) => sectionTodo.id !== id));
    },

    addItem: (sectionId: number) => {
        setSectionTodos(sectionTodo => sectionTodo.id === sectionId,
            			"taskList",
                        (taskList) => [...taskList, {id: curTaskId(), isDone: false, task: `task ${curTaskId()}`}]
        				);
        setCurTaskId(curTaskId() + 1);
    },

    removeItem: (sectionId: number, id: number) => {
        setSectionTodos(sectionTodo => sectionTodo.id === sectionId,
    					"taskList",
                        taskList => taskList.filter((task) => task.id !== id));
    },

    changeIsDone: (sectionId: number, id: number) => {
        setSectionTodos(sectionTodo => sectionTodo.id === sectionId,
            			"taskList", task => task.id === id,
                        "isDone", isDone => !isDone
        			   );
    },

    updateTaskName: (sectionId: number, id: number, event: Event) => {
        setSectionTodos(sectionTodo => sectionTodo.id === sectionId,
            			"taskList", task => task.id === id,
                        "task", task => (event.target as HTMLInputElement).value
        );
    },
};

export default storeManager;
export type { task, sectionTodo };