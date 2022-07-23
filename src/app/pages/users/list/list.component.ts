import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list:any=[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.listUsers();
  }
  listUsers()
  {
    this.usersService.getUsers().subscribe(
      res=>{
        this.list=res;
      },
      err=>console.log(err)
    );

  }

  delete(id:string)
  {
    this.usersService.deleteUser(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }


}
