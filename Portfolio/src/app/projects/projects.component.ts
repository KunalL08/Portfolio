import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects : Project[] = [
    {
      title : 'Banking mPOS Application',
      technology : 'Angular Ionic Capacitor',
      description: [
        'Designed Angular UI for intuitive customer experience in credit card mPOS application.',
        'Integrated APIs for seamless communication with banking systems, ensuring efficient transactions.'
      ]
    },
    {
      title : 'Food Ordering Platform based on MEAN stack',
      technology : 'MongoDB Express Angular Node',
      description: [
        'Created a streamlined food ordering platform using the MEAN stack, offering seamless online ordering and payment processing.'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
