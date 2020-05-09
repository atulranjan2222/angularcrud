import { CustomerserviceService } from './../services/customerservice.service';
import { Component, OnInit } from '@angular/core';
import {FormArray,FormBuilder,FormGroup,Validators}from '@angular/forms'
@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {

  title = 'angular-example';
  customerForm: FormGroup;
  submitted = false;
genderList:any=['male','female','none']
 countryList:any=['INDIA','USA']
 stateList:any=[];
 data = {};
 constructor(private fb:FormBuilder,private service:CustomerserviceService){

  }
  ngOnInit(){
    this.customerForm = this.fb.group({
      customerCode:['',[Validators.required,Validators.pattern('[A-Z]+_([0-9]*)')]],
      firstName:['',Validators.required],
      middleName:[''],
      lastName:['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address:this.fb.group({
        addressLine1:[''],
        addressLine2:[''],
        city:[''],
        state:[''],
        country:[''],
        zipCode:['']
      })

    })
  }

  get f() { return this.customerForm.controls; }


  get firstName() {
    return this.customerForm.get('firstName');
  }

  get lastName() {
    return this.customerForm.get('lastName');
  }  

  get middleName() {
    return this.customerForm.get('middleName');
  }

  onSubmit() {
   // this.submitted = true;

    // stop here if form is invalid
   // if (this.customerForm.invalid) {
     //   return;
    //}
    this.service.createCustomer(this.customerForm.value);
    // display form values on success
    //alert('SUCCESS!! :-)\n' + JSON.stringify(this.customerForm.value, null, 4));
    //console.log('SUCCESS!! :-)\n' + JSON.stringify(this.customerForm.value, null, 4))
}
onChangeCountry(country:string){
if(country =="INDIA"){
  this.stateList=['Andhar Pradesh','Bihar','West Bengal','Odisha','Tamil Nadu','Maharastra','Assam']
}else if(country=="USA"){
  this.stateList=['New York','Ohio','New Jersey','Oregon',' Pennsylvania','Texas',' Washington','Utah']
}else{
  this.stateList=[];
}

}

onReset() {
  this.submitted = false;
  this.customerForm.reset();
}

}
