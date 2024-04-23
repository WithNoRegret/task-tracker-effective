import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderContentComponent } from './layout/header-content/header-content.component';
import { SidebarContentComponent } from './layout/sidebar-content/sidebar-content.component';
import { MainContentComponent } from './layout/main-content/main-content.component';

import { TaskService } from './services/task.service';
import { FormSubmitService } from './services/form-submit.service';

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
  constructor(
    public taskService: TaskService,
    private formSubmitService: FormSubmitService
  ) {}

  ngOnInit() {
    this.formSubmitService.formSubmitted$.subscribe(formData => {
      this.taskService.updateTasks(formData);
    });
  }
}
