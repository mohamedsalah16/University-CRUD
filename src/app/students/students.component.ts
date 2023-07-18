import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  
  public students: any[]=[];
  public student=new Student() ;

  public isAddFormOpen = false;
  public isEditFormOpen = false;
  public studentToEdit: any;

  constructor(private _studentsService: StudentService) { }



  ngOnInit() {
    this._studentsService
      .getAllStudents()
      .subscribe((students) => {
        console.log(students);
        this.students = students;
      });
     
  }

  showAllStudents()
  {
    this._studentsService
      .getAllStudents()
      .subscribe((students) => {
        console.log(students);
        this.students = students;
      });
  }

  showAddForm(){
    this.isAddFormOpen = true
  }
  hideAddForm(){
    this.isAddFormOpen = false
  }

  showEditForm(student:any){
    this.isEditFormOpen = true
    this.studentToEdit = student
  }
  hideEditForm(){
    this.isEditFormOpen = false
    this.studentToEdit = {}
  }

  addNewStudent(fristName: string, middleName: string, lastName: string, subjects: string) : void
  {
    const subjectIDs = subjects.split(",").map(s=>parseInt(s));
    const payload = {
      fristName, middleName, lastName, subjects: subjectIDs
    }

    
    this._studentsService.addStudent(payload).subscribe(response=>{
      this.student=new Student();
      this.student=response;
      this.students = [...this.students, response];

      // close the form
      this.isAddFormOpen = false
    });
  }
  updateStudentById(id:number, fristName: string, middleName: string, lastName: string, subjects: string):void
  {
    const subjectIDs = subjects.split(",").map(s=>parseInt(s));
    const payload = {
      id, fristName, middleName, lastName, subjects: subjectIDs
    }

    this._studentsService.updateStudent(id, payload).subscribe(response=>{
      this.students = this.students.map(s => s.id === id ? response : s);

      // close the form
      this.isEditFormOpen = false
      this.studentToEdit = {}
    });
  }
  deleteStudentById(id:number)
  {    
    this._studentsService.deleteStudent(id).subscribe(response=>{
      this.students = this.students.filter(s => s.id === id)
    });
  }
}



