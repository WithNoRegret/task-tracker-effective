import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TaskProps } from '../interfaces/task-props';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskStorage: TaskProps[] = [];
  private tasksSubject = new BehaviorSubject<TaskProps[]>([]);
  $tasks = this.tasksSubject.asObservable();


  constructor() { 
    const storedTasks = localStorage.getItem('task-tracker-effective-tasks');
    if (storedTasks) {
      this.tasksSubject.next(JSON.parse(storedTasks));
      this.taskStorage = JSON.parse(storedTasks);
    }
  }

  updateTasks(tasks: TaskProps) {
    this.taskStorage = [...this.taskStorage, tasks];
    this.tasksSubject.next(this.taskStorage);
    localStorage.setItem('task-tracker-effective-tasks', JSON.stringify(this.taskStorage));
  }
}
