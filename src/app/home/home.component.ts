import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:any = [];
  showInfo:boolean = false;
  post:any;

  showContact = true;

  isLost:any = "";

  constructor(private http:CommonService) { }

  // json:LostItem[]=[ {"data":{id:1,
  //   attributes:{
  //     Title:"title1",
  //     Location:"Vancvouver",
  //     Claim:false,
  //     Found:false,
  //     LostOrFound:"found",
  //     Email:"email",
  //     Phonenumber:"12345",
  //     Description:"Description",
  //     Image:"image",
  //     Date_found:"Date",
  //   Claim_name: "Claim",
  //   }
  //   }
  // }
  // ]

  lost() {
    
  }

  getInfo(){
      this.showInfo = !this.showInfo;
  }

  expand(id:number, itemCard:HTMLElement) {
    console.log(itemCard)
    itemCard.className = 'display';
    this.showContact = false;
  }

  ngOnInit(): void {
    this.http.getAllposts().subscribe(posts =>{
      this.posts = posts;
      console.log(this.posts)
   })

  }

}
