import { Component, OnInit } from '@angular/core';
import { Customers } from '../models/customers';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
//customers:Customers[]=[];
  constructor() { }

  displayedColumns:string[] = ['customerCode', 'firstName', 'middleName', 'lastName','gender','email','mobile','address.addressLine1','address.addressLine2','address.city','address.state','address.country','address.zipCode'];
  dataSource = new MatTableDataSource<Customers>(ELEMENT_DATA);

  ngOnInit(): void {

  }

}
const ELEMENT_DATA: Customers[] =[{
	"customerCode":"kumar_123",
	"firstName":"kumar",
	"middleName":"ram",
	"lastName":"kalyan",
	"gender":"male",
	"email":"kumar@gmail.com",
	"mobile":"7845570593",
	"address":{
		"addressLine1":"begonia",
		"addressLine2":"homes",
		"city":"hyderabad",
		"state":"telangan",
		"country":"INDIA",
		"zipCode":"500089"
	}
},
{
	"customerCode":"rama_234",
	"firstName":"rahim",
	"middleName":"ram",
	"lastName":"kalyani",
	"gender":"female",
	"email":"rama@gmail.com",
	"mobile":"7856786578",
	"address":{
		"addressLine1":"mushouli",
		"addressLine2":"gangapur",
		"city":"jehanabad",
		"state":"bihar",
		"country":"INDIA",
		"zipCode":"804407"
	}
}
]