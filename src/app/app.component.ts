import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counted:any
  countshow=false
  data: any
  date1: any
  date2: any
  title = 'date-compare';
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      topics1: ['', Validators.required],
      topics2: ['', Validators.required],
    });
  }

  count() {
    var diff = 0;
    console.log(this.angForm.value)
    this.data = this.angForm.value
    this.date1 = new Date(this.data.topics1)
    this.date2 = new Date(this.data.topics2)
    diff = (this.date2 - this.date1)
    console.log(this.date1)
    console.log(this.date2)
    console.log(diff)
    var days = 1000 * 60 * 60 * 24;
    var year = 1000 * 60 * 60 * 24 * 30 * 12;
    var month = 1000 * 60 * 60 * 24 * 30;
    var results1 = Math.floor(diff / days);
    var results3 = Math.floor(diff / year);
    var results2 = Math.floor(diff / month);
    console.log(results1)
    console.log(results2)
    console.log(results3)
    this.counted = results1 + " days "+ " " + results2 + " months " + " "  +  results3 + " year "
    this.countshow=true
  }
}
