import { Component, OnInit } from '@angular/core';
import { CouseService } from 'src/app/website/home/courses/course service/couse.service';
import { cousedetails } from '../header/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  coursedets: cousedetails[] = [];

  constructor(private http: CouseService) { }

  ngOnInit(): void {


  }

  getdetails() {
    alert("home details")
    this.http.getData("Admin/allSkills").subscribe(
      data => {
        this.coursedets = <any>data;
        console.log(this.coursedets);
      },
      err => {
        if (err instanceof Error)
          alert("server side error")
        else
          alert("client side error")
      }
    )
  }

}
