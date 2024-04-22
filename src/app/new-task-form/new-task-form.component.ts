import { v4 as uuidv4 } from 'uuid';

import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TaskProps } from '../task-props';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss'
})
export class NewTaskFormComponent implements OnInit {

  taskForm: FormGroup;

  tasks: { [key: string]: TaskProps } = {};

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      deadline: ['', Validators.required],
      status: ['', Validators.required],
      taskAssignees: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const storedTasks = localStorage.getItem('task-tracker-effective-tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  onSubmit(event: Event) {
    const taskId = uuidv4();
    const newTask: TaskProps = {
      title: this.taskForm.value.title,
      body: this.taskForm.value.body,
      deadline: this.taskForm.value.deadline,
      status: this.taskForm.value.status,
      taskAssignees: this.taskForm.value.taskAssignees
    };
    this.tasks[taskId] = newTask;
    localStorage.setItem('task-tracker-effective-tasks', JSON.stringify(this.tasks));
    window.location.reload();
  }
}
