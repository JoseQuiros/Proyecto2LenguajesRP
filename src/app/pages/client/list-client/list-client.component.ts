import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  listClient:any=[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.listClients();
  }

  listClients()
  {
    this.clientService.getClients().subscribe(
      res=>{
        this.listClient=res;
      },
      err=>console.log(err)
    );

  }

  delete(id:string)
  {
    this.clientService.deleteClient(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
