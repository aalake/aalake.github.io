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
  {title:'Bolo', 
   description: `A web application built under the PPD (Pinecrest Police
    Department) to be used by civilians and police departments, to communicate
    information of crimes and suspicious activities`, 
  //  techStack:['Angular','HTML5','Bootstrap','Angular Material UI', 'Java Spring Boot',
  //   'RESTFUL API', 'SQL(MSSQL)', 'Git(Github)', 'npm', 'Agile(Scrum)' ],
    techStack:['Angular, HTML5, Bootstrap, Angular Material UI','Java Spring Boot, RESTFUL API, SQL(MSSQL)',
    'Git(Github), npm, VS Code, Agile(Scrum) '],
   contributions:'Frontend (Angular, HTML5, CSS3, Bootstrap, Angular Material UI)'},

  { title:'Portfolio Site', 
  description: `My site is used as another avenue for people to get to know me.
  It has communication features,background info & personal interest in one place`, 
  techStack:['Angular(v.10)','HTML5','CSS3','Material UI','Bootstrap', 
  'SQL(AWS MySQL RDBS)', 'Node.js','Express.js','Git(Github)','npm'],
  contributions:'Designed and built site'},

  {title:'BookBench', 
  description: `A small web application project, built in collaboration with 
  a software engineering team, for university requirement. It's main purpose was as
  an online book library with beautiful UI features and the ability to make purchases`, 
  techStack:['PHP','HTML5','CSS3','SQL(MySQL)','JavaScript','Apache HTTP Server','Agile(Scrum)'], 
  contributions:'Used all technologies in the stack, to develop on the frontend and backend'}
]  
  constructor() {  }

  ngOnInit(): void {
  }

}
