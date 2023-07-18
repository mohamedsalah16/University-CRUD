import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Student';
import { ResponseViewModel } from './responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // student=new Student();

  constructor(private _httpClient: HttpClient) {
    
   }

  public getStudent(id:number): Observable<any> {
    return this._httpClient.get<any>('https://localhost:5001/api/Students/'+id);
  }

  public getAllStudents(): Observable<any> {
    return this._httpClient.get<any>('https://localhost:5001/api/Students');
  }

  public addStudent(student:any) : Observable<any>
  {
    console.log(student);
    return this._httpClient.post<any>('https://localhost:5001/api/Students',student);
  }

  public updateStudent(id:number, student:any):Observable<any>
  {
    return this._httpClient.put('https://localhost:5001/api/Students/' + id, student);
  }

  public deleteStudent(id:number):Observable<any>
  {    
   return this._httpClient.delete('https://localhost:5001/api/Students/'+id);
  }
  
}
