import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Users} from '../../model/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Users[];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: Users[]) => {
      this.users = users;
    });
  }

}
