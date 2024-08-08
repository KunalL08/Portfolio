import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData : string[][] = [
    ['Name', 'Kunal Lohar'],
    ['DOB', '08/02/1998'],
    ['Work exp', '3.5 years'],
    ['Education', 'BE CS [2020]'],
    ['Interests', 'Cricket']
  ];

  aboutMe: string[] = [
    'Hi, Im Software developer with 3.5 years experience in web and hybrid mobile app design, specializing in front-end Angular framework.',
    'Worked as Associate and then Analyst in Accenture for various technologies (Angular, Ionic, Javascript).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.'
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
