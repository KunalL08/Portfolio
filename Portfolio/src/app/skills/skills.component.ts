import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills : Skill[] = [
    {
      name : 'Angular',
      level : 'Intermidiate',
      rating : 65
    },
    {
      name : 'HTML CSS',
      level : 'Expert',
      rating : 70
    },
    {
      name : 'Javascript Typescript',
      level : 'Expert',
      rating : 75
    },
    {
      name : 'Ionic Cordova-Capacitor',
      level : 'Expert',
      rating : 80
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
