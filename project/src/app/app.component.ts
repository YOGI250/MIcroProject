import { Component } from '@angular/core';
import { Library } from './model/Library';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'EMS';
  employee : Library;
  result : string;
  employeeArr : Library[];
  flag : boolean;

  constructor(private service : EmployeeService){
    this.employee=new Library();
    this.result="";
    this.employeeArr = [];
    this.flag=false;
  }
insertEmployee(data:any){
  this.employee.id=data.stuId;
  this.employee.stuName=data.stuName;
  this.employee.bookId=data.bookId;
  this.employee.bookname = data.bookname;
  this.employee.stuContact = data.stuContact;

  this.result=this.service.insertEmployee(this.employee);
  //alert(data.empId+" "+data.empName+" "+data.empSalary);
}

updateEmployee(data:any){
  this.employee.id=data.stuId;
  this.employee.stuName=data.stuName;
  this.employee.bookId=data.bookId;
  this.employee.bookname = data.bookname;
  this.employee.stuContact = data.stuContact;

  this.result=this.service.updateEmployee(this.employee);
  //alert(data.empId+" "+data.empName+" "+data.empSalary);
}
deleteEmployee(data : any){
  this.result = this.service.deleteEmployee(data.stuId);
}
findEmployee(data : any){
  this.employee=this.service.findEmployee(data.stuId);
  this.result=this.employee.id+" "+this.employee.stuName+" "+this.employee.bookId+" "+this.employee.bookname+" "+this.employee.stuContact;
}
findAllEmployee(){
  this.employeeArr = this.service.findAllEmployee();
  this.flag=true;
}

}