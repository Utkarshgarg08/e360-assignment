// edit-user.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/models/user.interface';

@Component({
  selector: 'app-edit-user-component',
  templateUrl: './edit-user-component.component.html',
  styleUrls: ['./edit-user-component.component.scss']
})
export class EditUserComponent {
  @Input() user: IUser | undefined;
  @Output() saveChangesEvent = new EventEmitter<IUser>();

  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  ngOnChanges() {
    if (this.user) {
      this.editForm.patchValue(this.user);
    }
  }

  saveChanges() {
    if (this.editForm.valid) {
      const updatedUser = { ...this.user, ...this.editForm.value };
      this.saveChangesEvent.emit(updatedUser);
    }
  }
}
