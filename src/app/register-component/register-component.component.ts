import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/user-service.service';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  constructor(
    private userSevice: UserServiceService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onFormSubmit(ngForm){
    var name = ngForm.controls['name'].value;
    var user = ngForm.controls['username'].value;
    var pass = ngForm.controls['password'].value;
    var repass = ngForm.controls['repassword'].value;
    var email = ngForm.controls['email'].value;

    this.userSevice.userpost(user, pass,email, name).subscribe((data: any) =>{
			console.log(data);
		},(err:HttpErrorResponse)=>{
			console.log('error');
		});
  }

}
