import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { NewTaskFormComponent } from '../new-task-form/new-task-form.component';

import { FormSubmitService } from '../services/form-submit.service';

@Component({
  selector: 'app-new-task-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    NewTaskFormComponent
  ],
  templateUrl: './new-task-modal.component.html',
  styleUrl: './new-task-modal.component.scss'
})
export class NewTaskModalComponent {
  constructor(
    public dialogRef: MatDialogRef<NewTaskModalComponent>,
    private formSubmitService: FormSubmitService
  ) {}

  ngOnInit() {
    this.formSubmitService.formSubmitted$.subscribe(() => {
      this.dialogRef.close();
    });
  }
}
