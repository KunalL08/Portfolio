import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      institute : 'University of Pune',
      course : 'Bachelor of Engineering',
      duration : '2016-2020',
      score : '7 CGPA'
    },
    {
      institute : 'Maharashtra HSC board',
      course : 'HSC',
      duration : '2015-2016',
      score : '65%'
    },
    {
      institute : 'Maharashtra SSC board',
      course : 'SSC',
      duration : '2013-2014',
      score : '85%'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
