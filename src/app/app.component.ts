import { Component, OnInit } from '@angular/core';
import { ContactTableService } from './Services/contact-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title ='contact-table'
  allDetails:any
  searchKey:string = ''


  constructor(private api:ContactTableService){}


  ngOnInit(): void {
    this.api.allDetails().subscribe((result:any)=>{
      console.log(result);
      this.allDetails = result.users
      
    })
  }

  
}
