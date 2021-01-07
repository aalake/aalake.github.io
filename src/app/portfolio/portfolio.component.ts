import { Component, OnInit } from '@angular/core';
import {IProject} from '../models/project'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  faChevronDown = faChevronDown;
 

  projects: IProject[] =
[
  {title:'Bolo', description: 'Angular,MSSQL,Java Spring Boot, NodeJS', summary: 'Insert'},
  {title:'Portfolio Site', description: 'MEAN - MySQL,Express, Angular, NodeJS', summary: 'Insert 2'},
  {title:'BookBench', description: 'MAMP - Mac(OS), Apache, MySQL, PHP', summary: 'Insert 3'}
]  
  constructor() { }

  ngOnInit(): void {
  }

}
