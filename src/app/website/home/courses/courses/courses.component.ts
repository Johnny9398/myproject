import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { CouseService } from '../course service/couse.service';
import { cousedetails, Topics, } from './coureses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  coursedets: cousedetails[] = [];
  topics: Topics[] = [];


  constructor(private http: CouseService) {

  }

  ngOnInit(): void {

    this.getdetails();

  }

  getdetails() {
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


  LoadTopics(skillId: any) {

    this.http.getDataByparm("Admin/getTopicsBySkill", skillId).subscribe(
      data => {
        this.topics = <any>data;

        console.log(this.topics);
      },
      err => {
        if (err instanceof Error) {
          alert("server side error")
        } else
          alert("client side error")
      }
    );

  }



}


