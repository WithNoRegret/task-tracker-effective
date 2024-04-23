import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TaskProps } from '../interfaces/task-props';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {
  private formSubmittedSubject = new Subject<TaskProps>();

  formSubmitted$ = this.formSubmittedSubject.asObservable();

  triggerFormSubmitted(formData: TaskProps) {
    this.formSubmittedSubject.next(formData);
  }
}
