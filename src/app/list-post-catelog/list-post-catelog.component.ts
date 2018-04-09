import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';

@Component({
	selector: 'app-list-post-catelog',
	templateUrl: './list-post-catelog.component.html',
	styleUrls: ['./list-post-catelog.component.css']
})
export class ListPostCatelogComponent implements OnInit {

	private apiUrl : string = "http://localhost/appAPI/index.php/api/Catolegy/findAllDetalt";
	public dataGet : any; 
	public limit:number = 12;
	public data : any = [];

	constructor(private route: ActivatedRoute ,private router: Router ,private http: Http ) {
		this.route.params.subscribe(data => {
			this.dataGet = data.id
			console.log(this.dataGet);
			this.doGET(this.dataGet, this.limit);
		});
		
	}

	ngOnInit() {
	}

	doGET( data:string ,numlimit ) {
		let url:string = `${this.apiUrl}/get`;
		let search = new URLSearchParams();
		search.set('alias_name', data);
		search.set('limit', numlimit);
		this.http.get(url, {search}).map(res => res.json()).subscribe(data =>{
			this.data = data;
			console.log(data);
		}); 
	}

	// sendHome() {
	// 	this.router.navigate(['']);
	// }
  
}
