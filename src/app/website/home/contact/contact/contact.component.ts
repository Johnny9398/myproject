import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { feedback } from './model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

feed:feedback;

  constructor() {
    this.feed=new feedback();
  }

  ngOnInit(): void {
  }

  addmessage(form:NgForm){
    alert("added");
  }
}
