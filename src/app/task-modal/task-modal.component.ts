import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { NewTaskFormComponent } from '../new-task-form/new-task-form.component';

import { FormSubmitService } from '../services/form-submit.service';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    NewTaskFormComponent
  ],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss'
})
export class TaskModalComponent {
  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    private formSubmitService: FormSubmitService
  ) {}

  ngOnInit() {
    this.formSubmitService.formSubmitted$.subscribe(() => {
      this.dialogRef.close();
    });
  }
}
