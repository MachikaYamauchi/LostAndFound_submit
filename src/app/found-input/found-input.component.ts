import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-found-input',
  templateUrl: './found-input.component.html',
  styleUrls: ['./found-input.component.scss']
})
export class FoundInputComponent implements OnInit {
  lostOrFound='';
  itemName='';
  description ='';
  image='';
  date='';
  location='';
  name='';
  email='';
  phoneNumber='';
  formMessageHidden = true;

  constructor(private cs:CommonService) { }

  submit(itemName:any, location:any, lostOrFound:any,email:any, phoneNumber:any,  description:any,  image:any, date:any,  name:any){
    this.cs.addPost( this.itemName, this.location, this.lostOrFound, this.email, this.phoneNumber, this.description,this.image, this.date, this.name).subscribe(data =>{
      this.formMessageHidden = false;
      console.log(data);
    })
  }

  getThisValue(value:any){
    console.log(value);
    this.lostOrFound = value;
    console.log(this.lostOrFound);
  }

  ngOnInit(): void {
  }

}
