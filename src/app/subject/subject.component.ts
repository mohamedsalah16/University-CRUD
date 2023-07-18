import { Component, OnInit } from '@angular/core';
import { Subject } from '../Subject';
import { SubjectService } from '../subject.service';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  public subjects: any[]=[];
  public subject=new Subject();

  public isAddDialogOpen = false;
  public isEditDialogOpen = false;
  public subjectToEdit = false;
  
  constructor(private _subjectService:SubjectService){}

  ngOnInit(){
      this._subjectService
      .getAllSubjects()
      .subscribe(subjects=>{
      
         this.subjects=subjects;
      })
  }



  /* ------------------------------------------------------------------ */

  allsubjectsDiv:boolean=true;
 
  subjectsDiv:boolean=true
  showsubject()
  {
    if(this.subjectsDiv==true)
    this.subjectsDiv=false;
    else
    this.subjectsDiv=true;
  }
  addDiv:boolean=true;
  addsubject()
  {
    if(this.addDiv==true)
    this.addDiv=false;
    else
    this.addDiv=true;
  }

  updateDiv:boolean=true;
  updatesubject( )
  {
    if(this.updateDiv==true)
    this.updateDiv=false;
    else
    this.updateDiv=true;
  }

  deleteDiv:boolean=true;
  deletesubject()
  {
    if(this.deleteDiv==true)
    this.deleteDiv=false;
    else
    this.deleteDiv=true;
  }

  getAllSubject()
  {
    this._subjectService
      .getAllSubjects()
      .subscribe(response=>{
        console.log(response);
         this.subjects=response;
      })
  }
  getsubjectById(id:string):void
  {
    var id2=Number(id);
    this._subjectService.getSubject(id2).subscribe(
      response=>{
        
      }
    )
  }
  addNewsubject(fristName:any):void
  {
    this.subject.Name=fristName;
    this._subjectService.addSubject(this.subject).subscribe(response=>{
      this.subject=response;
      // this.subjects.push(this.subject.Name);
      window.location.reload();
    });
    this.addsubject();
    // this.getAllSubject();

  }
  updatesubjectById(firstName:any,id:any)
  {
    var id2= Number(id);
    this.subject.id=id2;
    this.subject.Name=firstName;

    this._subjectService.updateSubject(this.subject).subscribe(response=>{
      this.subject=response;

    });

  }
  deletesubjectById(id:number)
  {
    var id2=Number(id);
    this._subjectService.deleteSubject(id2).subscribe(response=>{

    });
  }
}
