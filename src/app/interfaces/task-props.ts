import { Person } from './person';

export interface TaskProps {
    id: string;
    title: string;
    body: string;
    deadline: Date;
    status: "Scheduled" | "In Progress" | "Done";
    taskAssignees: Person[];
}
