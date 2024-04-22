import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { NewTaskFormComponent } from '../new-task-form/new-task-form.component';

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

}
