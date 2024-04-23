import { v4 as uuidv4 } from 'uuid';
import {ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import { TaskProps } from '../interfaces/task-props';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  providers: [
    provideNativeDateAdapter()
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss'
})
export class NewTaskFormComponent implements OnInit {

  protected taskForm: FormGroup;
  readonly separatorKeysCodes = [ENTER] as const;
  addOnBlur = true;

  public assigners: Person[] = [];
  public tasks: { [key: string]: TaskProps } = {};

  addChip(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.assigners.push({name: value});
    }
    event.chipInput!.clear();
  }

  removeChip(assigner: Person): void {
    const index = this.assigners.indexOf(assigner);

    if (index >= 0) {
      this.assigners.splice(index, 1);
    }
  }

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      deadline: ['', Validators.required],
      status: ['', Validators.required],
      taskAssignees: ['']
    });
  }

  public ngOnInit(): void {
    const storedTasks = localStorage.getItem('task-tracker-effective-tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  protected onSubmit(event: Event) {
    console.log(this.taskForm);
    if (this.taskForm.invalid || this.assigners.length == 0) {
      console.log('Invalid form');
      return;
    }

    const taskId = uuidv4();
    const newTask: TaskProps = {
      title: this.taskForm.value.title,
      body: this.taskForm.value.body,
      deadline: this.taskForm.value.deadline,
      status: this.taskForm.value.status,
      taskAssignees: this.assigners,
    };
    this.tasks[taskId] = newTask;
    localStorage.setItem('task-tracker-effective-tasks', JSON.stringify(this.tasks));
    window.location.reload();
  }
}
