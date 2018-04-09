import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../shared/user-service.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
	
	inforUser: any;
	
	constructor(private userService: UserServiceService, private router: Router){}
	
	ngOnInit() {
		this.userService.getUserClaims().subscribe((data:any)=>{
			this.inforUser = data;
		}
		,(err:HttpErrorResponse)=>{
			this.inforUser = false;
		}
		);
	}

	showUser(){
		this.userService.getUserClaims().subscribe((data:any)=>{
			this.inforUser = data;
		}
		,(err:HttpErrorResponse)=>{
			this.inforUser = false;
		});
	}

	Logout(){
		localStorage.removeItem('userToken');
		this.router.navigate(['/']);
	}

}
