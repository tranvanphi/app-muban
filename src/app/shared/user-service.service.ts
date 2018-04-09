import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserServiceService {
  rootUrl:string = "http://localhost/appAPI/index.php/api/user/";

  constructor(private http: HttpClient) { }
  
  userAuthentication(username, password){
    var data = "username="+username+"&password="+password;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8','No-Auth':'TRUE'});
    return this.http.post(this.rootUrl + 'login', data, {headers: reqHeader});
  }

  getUserClaims(){
    var headers = new HttpHeaders({'Authorization': 'Bearer '});
    if(localStorage.getItem('userToken')){
      var headers = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('userToken')});
      
    }
    return this.http.get(this.rootUrl+'checkuser', {headers: headers});
    
  }
}
