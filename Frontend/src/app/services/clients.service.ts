import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientI } from '../models/client-i';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URI = 'http://localhost:5000';
  client: ClientI | undefined;

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(`${this.API_URI}/clientes`);
  }

  getClient(id: string) {
    return this.http.get(`${this.API_URI}/clientes/${id}`);
  }

  deleteClient(id: string)  {
    return this.http.delete(`${this.API_URI}/clientes/${id}`);
  }

  addClient(client: ClientI)  {
    return this.http.post(`${this.API_URI}/clientes`,client);
  }
}
