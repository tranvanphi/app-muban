import { Component, OnInit } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import * as _ from 'lodash';    

declare var $:any;

@Component({
  selector: 'app-list-catalog',
  templateUrl: './list-catalog.component.html',
  styleUrls: ['./list-catalog.component.css']
})
export class ListCatalogComponent implements OnInit {
  	private apiUrl = "http://localhost/appAPI/index.php/api/Catolegy/findAll";
	public data : any = [];

	constructor(private http: Http) {
		this.getData();
	}

	ngOnInit() {
	
	}

	getData(){
		let search = new URLSearchParams();
		this.http.get(this.apiUrl).map(res => res.json()).subscribe(data => {
			this.data = data;
		}); 
	}

	getCapitalizeName(name:string){
		return _.capitalize(name);
	}
}
