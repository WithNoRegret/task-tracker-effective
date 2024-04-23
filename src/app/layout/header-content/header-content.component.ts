import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { TaskModalComponent } from '../../task-modal/task-modal.component';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss'
})
export class HeaderContentComponent {
  openTaskModal() {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      height: '650px',
      width: '600px',
      data: {},
      panelClass: 'task-modal',
    });
  }

  constructor(private dialog: MatDialog) {}
}
