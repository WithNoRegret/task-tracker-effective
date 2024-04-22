import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderContentComponent } from './layout/header-content/header-content.component';
import { SidebarContentComponent } from './layout/sidebar-content/sidebar-content.component';
import { MainContentComponent } from './layout/main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,

    HeaderContentComponent,
    SidebarContentComponent,
    MainContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  openTaskModal(taskId: Number) {
    console.log('openTaskModal', taskId);
  }

  editTask() {
    console.log('editTask');
  }

  deleteCurrentTask() {
    console.log('deleteCurrentTask');
  }
}
