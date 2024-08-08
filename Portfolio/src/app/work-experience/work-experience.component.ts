import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : WorkExperience [] = [
    {
      role : 'Application Development Analyst',
      company : 'Accenture',
      duration : '01 June 2022 - Till Dates',
      description : [
        'Led the development of intricate UI designs for Android and iOS platforms, ensuring seamless integration of features for tablet and mobile devices.',
        'Led the team of junior developers to achieve 95% unit test coverage, guaranteeing robust code quality and minimizing risks.',
        'Contributed to the development of an application that prioritized accessibility, ensuring equal access for all users.'
      ]
    },
    {
      role : 'Application Development Associate',
      company : 'Accenture',
      duration : '03 February 2021 - 01 June 2022',
      description : [
        'Gained a comprehensive understanding of APIs and their integration into web applications.',
        'Collaborated effectively in a team environment, contributing to project success, and demonstrating adaptability',
        'Provided excellent client support and interaction, addressing their needs and concerns, which contributed to client satisfaction and requirement fulfilment.'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
