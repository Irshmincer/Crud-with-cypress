import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  id: number = 0;
  userform: FormGroup;
  adduser!: boolean;
  value!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: TodoService
  ) {
    //**************Create Reactive Form with validation********************* */
    this.userform = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9 ]{10}')]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      gender: ['', [Validators.required]],
      dob: [null, [Validators.required]],
      id: [0, [Validators.required]],
      isActive: [true],

      userType: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.value = this.route.snapshot.params['id'];
    this.adduser = !this.value;

    //**************Get User ID On Edit********************* */
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.userform.get('Id')?.setValue(params['id']);
        const data = this.userService.getUsersByID(this.id);
        if (data) {
          this.userform.setValue(data);
        }
      }
    });

    // onSubmit() {
    //   this.todoService.addTodo(this.todo);

    //   this.todo = '';
    //   this.router.navigate(['/list']);
    // }
  }
  save() {
    if (this.userform.invalid)
      // true if any form validation fail
      return;

    if (this.userform.get('id')?.value === 0) {
      // on Create New User
      this.userService.addUser(this.userform.value);
    } else {
      // on Update User info
      this.userService.updateUser(this.userform.value);
    }

    //Redirecting to user List page after save or update
    this.router.navigate(['/list']);
  }
}
