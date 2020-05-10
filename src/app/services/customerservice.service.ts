import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{Observable} from 'rxjs'
import { Customers } from '../models/customers';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
 baseUrl:string='http://localhost:8088';
  constructor(private http: HttpClient) { }
 
   createCustomer(customer:Customers) {
     
    console.log(JSON.stringify(customer))
    return this.http.post<Customers>(this.baseUrl+ '/demo/createcustomers/', customer,{headers:{'Content-Type': 'application/json'}}).subscribe(result => {
      //console.log( result );
  });
}
}
