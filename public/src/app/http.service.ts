import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  grabAllPets() {
    return this._http.get('/pets/show');
  }

  addNewPet(newPet) {
    return this._http.post('/pet/create', newPet);
  }

  deletePet(id) {
    return this._http.delete('/pet/' + id);
  }

  editPet(id, updatePet) {
    return this._http.put('/pet/' + id, updatePet);
  }

  onePet(id) {
    return this._http.get('/pet/' + id);
  }
}
