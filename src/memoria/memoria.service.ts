import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Memoria } from '../../src/memoria/memoria';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const memorias = 'memorias.json';

@Injectable()
export class MemoriaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getMemorias() : Observable<Memoria[]> {
        return this.http.get<Memoria[]>(API_URL + memorias);
    }
}