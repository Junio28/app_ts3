import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { ClientI } from '../../../models/client-i';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clientsService.getClients().subscribe(
      res => {
        this.clients = res;
        // console.log(this.clients)
      },
      err => console.error(err)
    );
  }

  deleteClient(id:string) {
    console.log(id)
  }

}
