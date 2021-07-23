import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    serviceurl="https://jsonplaceholder.typicode.com/";
    errorData={};
    redirectUrl:string;
  constructor(private http:HttpClient) {

   }
   Login(username:string,password:string){
     return  this.http.post<any>(this.serviceurl + '/posts',{userId:"1",id:"12345",title:"KB",body:"testing KB"})// this.http.post<any>(this.serviceurl,{username:username,password:password})
     .pipe(map(user=>{
       if (user){
    localStorage.setItem('CurrentUser',JSON.stringify("12345"))
     }}),
     catchError(this.handleError)
     );
   }

   Logout(){
    localStorage.removeItem('CurrentUser');
   }


    getAuthorizationToken(){
 const user=JSON.parse(localStorage.getItem('CurrentUser'))
 return user.token;
    }
isLoggedIn()
{
  if(localStorage.getItem('CurrentUser'))
  {
return true;
  }
  return false;
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {

    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {

    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }

  // return an observable with a user-facing error message
  this.errorData = {
    errorTitle: 'Oops! Request for document failed',
    errorDesc: 'Something bad happened. Please try again later.'
  };
  return throwError(this.errorData);
}
}