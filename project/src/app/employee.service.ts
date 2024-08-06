import { Injectable } from '@angular/core';
import { Library } from './model/Library';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url : string;
  employee:Library;
  employeeArr : Library[];

  constructor(private http : HttpClient) {
    this.url="http://localhost:3004/employees";
    this.employee=new Library();
    this.employeeArr=[];

   }

  insertEmployee(employee : Library){
    this.http.post<Library>(this.url,employee).subscribe();
    return "Employee Details Added";
 
  }

  updateEmployee(employee : Library){
    this.http.put<Library>(this.url+"/"+employee.id,employee).subscribe();
    return "Employee Details Updated";
 
  }
  deleteEmployee(empId : number){
    this.http.delete<Library>(this.url+"/"+empId).subscribe();
    return "Employee Details Deleted";
  }

  findEmployee(empId : number){
    this.http.get<Library>(this.url+"/"+empId).subscribe(data => this.employee = data);
    return this.employee;
  }

  findAllEmployee(){
    this.http.get<Library[]>(this.url).subscribe(data => this.employeeArr = data);
    return this.employeeArr;
  }

}
