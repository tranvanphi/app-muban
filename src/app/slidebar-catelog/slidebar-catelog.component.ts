import { Component, OnInit } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import * as _ from 'lodash';    


@Component({
  selector: 'app-slidebar-catelog',
  templateUrl: './slidebar-catelog.component.html',
  styleUrls: ['./slidebar-catelog.component.css']
})
export class SlidebarCatelogComponent implements OnInit {

  	private apiUrl = "http://localhost/appAPI/index.php/api/Catolegy/findAllDetalt";
	public data : any;
	public originData : any = [];

	constructor(private http: Http){
		this.getData();
	}

	ngOnInit() {}

	getData(){
		let url:string = `${this.apiUrl}/get`;
		// let search = new URLSearchParams();
		this.http.get(url).map(res => res.json()).subscribe(data => {
			this.originData = data;
			this.data = _.groupBy(data, 'id_group');
		}); 
	}

	getKeys(data){
		return _.keys(data);
	}

	getGroupName(groupId){
		let item = _.find(this.originData,{id_group: groupId});
		return _.capitalize(item.namegroup);
	}

	getAliasName(groupId){
		let item = _.find(this.originData,{id_group: groupId});
		return _.capitalize(item.alias_name);
	}
}
