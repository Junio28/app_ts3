import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientI } from '../models/client-i';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URI = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(`${this.API_URI}/clientes`);
  }
}
