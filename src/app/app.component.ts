//import { Customers } from './models/customers';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  customersArray:any[]=[];
 constructor(){}

  ngOnInit(){
   
  }

  

}
