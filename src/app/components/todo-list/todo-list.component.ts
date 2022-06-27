import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  userList: User[] = [];
  first = 0;
  dataSource: any;
  rows = 10;
  constructor(private userService: TodoService) {}
  ngOnInit(): void {
    // Get Users from UserService
    this.userList = this.userService.getUsers();
    this.dataSource = this.userList;
  }

  displayedColumns: string[] = [
    'Id',
    'Name',
    'Email',
    'Mobile',
    'DOB',
    'User-Type',
    'IsActive',
    'Action',
  ];
  //****************PrimeNG DataTable Pagination method Start*********************** */
  //***************Reference: https://primefaces.org/primeng/showcase/#/table/page********** */
  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.userList
      ? this.first === this.userList.length - this.rows
      : true;
  }
  isFirstPage(): boolean {
    return this.userList ? this.first === 0 : true;
  }
  //****************PrimeNG DataTable Pagination Method End*********************** */
  // ********************User To Remove User from User List*************************/
  remove(id: number) {
    this.userService.removeUser(id);
    this.userList = this.userService.getUsers();
  }
}
