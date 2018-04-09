import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { UserServiceService } from '../shared/user-service.service';

@Component({
	selector: 'app-form-login',
	templateUrl: './form-login.component.html',
	styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {
	isLoginError: boolean = false;
	
	constructor(
		private userSevice: UserServiceService,
		private router:Router,
		private http: HttpClient
	){}

	ngOnInit() {}

	onFormSubmit(userForm: NgForm) {
		var user = userForm.controls['username'].value;
		var pass = userForm.controls['password'].value;
		
		this.userSevice.userAuthentication(user, pass).subscribe((data: any) =>{
			localStorage.setItem('userToken',data.user_token);
			this.router.navigate(['/']);
		},(err:HttpErrorResponse)=>{
			this.isLoginError = true;
		});
	}

}
