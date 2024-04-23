import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { TaskService } from '../../services/task.service';

import { TaskProps } from '../../interfaces/task-props';

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
export class SidebarContentComponent implements OnInit {
  tasks: TaskProps[] = [];

  ngOnInit() {
    this.taskService.$tasks.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  constructor(
    private taskService: TaskService,
  ) {}
  
}
