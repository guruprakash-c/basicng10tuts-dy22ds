import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  addForm: FormGroup;
  p: any;
  constructor(private pgTitle: Title, private fb: FormBuilder) {
    this.pgTitle.setTitle('Reactive Forms - Angular Tutorial');
  }

  ngOnInit() {
    /*
    this.addForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      rememberMe: new FormControl(),
      avatarPhoto: new FormControl()
    });*/
    this.addForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.maxLength(12)])
      ),
      rememberMe: new FormControl(false, Validators.required),
      avatarPhoto: new FormControl()
    });
    /*const dataToEdit = {
      username: 'vinay',
      password: 'Password@123',
      rememberMe: false
      //,avatarPhoto: null
    };
    this.addForm.setValue(dataToEdit);//pass all values otherwise throws error
    */
    //this.addForm.patchValue(dataToEdit);
    /*if (this.addForm.invalid) {
      alert('Please fill the form to signin.');
    }
    if (this.addForm.pending) {
      alert('Pending.');
    }
    if (this.addForm.pristine) {
      alert('Pristine.');
    }
    if (this.addForm.untouched) {
      alert('Untouched.');
    }*/
  }

  loginForm(data) {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
    }
    /*if (this.addForm.dirty) {
      alert('Dirty.');
    }

    if (this.addForm.touched) {
      alert('Touched.');
    }*/
    this.addForm.get('rememberMe').valueChanges.subscribe(isChecked => {
      console.log(isChecked);
    });
    this.addForm.get('rememberMe').statusChanges.subscribe(statusChkBx => {
      console.log(statusChkBx);
    });
  }
  resetForm() {
    this.addForm.reset();
  }
}
