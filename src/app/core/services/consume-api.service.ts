import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {

  constructor(private _http:HttpClient, private _snackBar: MatSnackBar) { }

  openSnackBar(message:string,action:string) {
    this._snackBar.open(message,action, {
      duration: 1000,
      verticalPosition:'top'
    });
  }
  addMechanics(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/mechanics', data)
  }

  updateMechanics(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/mechanics/${id}`, data)
  }

  getMechanicsList(): Observable<any>{
    return this._http.get('http://localhost:3000/mechanics')
  }

  deleteMechanics(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/mechanics/${id}`)
  }


}
