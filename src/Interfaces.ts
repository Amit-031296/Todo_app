export interface ITask {
    id: number;
    taskName: string;
}

export type TaskContextType = {
    tasks: ITask[];
    addTask: (todo: ITask) => void;
    removeTask: (id: number) => void;
};