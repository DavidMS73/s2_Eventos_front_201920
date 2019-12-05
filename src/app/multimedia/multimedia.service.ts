import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Multimedia } from './multimedia';
import { Observable } from 'rxjs';

//const API_URL = '../../assets/';
//const multimedias = 'multimedias.json';

const API_URL = 'http://localhost:8080/s2_eventos-api/api/';
const multimedias = 'multimedias';

@Injectable()
export class MultimediaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

  getMultimedias(): Observable<Multimedia[]> {
    return this.http.get<Multimedia[]>(API_URL + multimedias);
  }

  createMultimedia(): Observable<Multimedia> {
    return this.http.post<Multimedia>(API_URL + multimedias,
      {
        "url": "https://uniandes.edu.co/sites/default/files/joe-biden-andes-galeria2.jpg",
        "nombre": "Auditorio",
        "tipo": "imagen",
      }
    );
  }
}