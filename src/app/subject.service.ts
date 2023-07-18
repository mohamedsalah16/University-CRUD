import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ISubject } from './Subject';
import { Subject } from './Subject';
import { Subject2 } from './SublectElse';
import { ResponseViewModel } from './responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _httpClient: HttpClient) { 
  //  const glal=new Subject2();
  }

  
  public getSubject(id:number): Observable<any> {
    return this._httpClient.get<any>('https://localhost:5001/Subjects'+id);
  }

  public getAllSubjects(): Observable<any> {
    return this._httpClient.get<any>('https://localhost:5001/api/Subjects');
  }

  public addSubject(elsayed:Subject) : Observable<any>
  {
    console.log(elsayed);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._httpClient.post('https://localhost:5001/api/Subjects',elsayed, {headers: headers});}

  public updateSubject(Subject:Subject):Observable<any>
  {
    const glal = new Subject2();
    glal.name=Subject.Name;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this._httpClient.put('https://localhost:5001/api/Subjects/'+Subject.id,glal, {headers: headers});}

  public deleteSubject(id:number):Observable<any>
  {return this._httpClient.delete('https:/localhost:5001/api/Subjects/'+id);}
 
  
}
