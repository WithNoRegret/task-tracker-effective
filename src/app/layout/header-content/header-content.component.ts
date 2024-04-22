import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { NewTaskModalComponent } from '../../new-task-modal/new-task-modal.component';

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
  openNewTaskModal() {
    const dialogRef = this.dialog.open(NewTaskModalComponent, {
      height: '650px',
      width: '600px',
      data: {},
      panelClass: 'task-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Модальное окно закрыто');
    });
  }

  constructor(private dialog: MatDialog) {}
}
