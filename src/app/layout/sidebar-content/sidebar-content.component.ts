import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { TaskProps } from '../../task-props';

@Component({
  selector: 'app-sidebar-content',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.scss'
})
export class SidebarContentComponent {
  Object = Object;
  tasks: { [key: string]: TaskProps } = {};

  ngOnInit(): void {
    const storedTasks = localStorage.getItem('task-tracker-effective-tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }

    console.log(this.tasks);
  }
}
