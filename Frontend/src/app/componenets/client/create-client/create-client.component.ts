import { Component, HostBinding, OnInit } from '@angular/core';
import { ClientI } from 'src/app/models/client-i';
import { ClientsService } from '../../../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  @HostBinding('class')  classes ='row';

  client: any  = {
      id: 0,
      nombres: '',
      apellidos: '',
      correo: '',
      telefonos: '',
      celular: '',
      fechaNacimiento: '',
      direccion: ''
}

  edit: boolean= false;
  constructor(private clientsService: ClientsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params =  this.activatedRoute.snapshot.params;
    if(params['id']){
      this.clientsService.getClient(params['id'])
        .subscribe(
          res=>{
            console.log(res);
            this.client = res;
            this.edit = true;
          },
          err=>console.error(err)

        )
    }
  }

  saveNewClient(){

    this.clientsService.addClient(this.client).subscribe(
      res => {
        // console.log(res)
        this.router.navigate(['/cliente'])
      },
      err=>console.error(err)
    )
  }

  updateClient(){
    console.log(this.client);
        this.clientsService.updateClient(this.client.id, this.client)
        .subscribe(
          res=>{
            this.router.navigate(['/cliente']);
            console.log(res);
          },
          err=> console.log(err)
        )
    }



}
