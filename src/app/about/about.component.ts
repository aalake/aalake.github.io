import { Component, OnInit } from '@angular/core';
import { AboutData } from '../data/about.data'
import { faJsSquare, faNodeJs, faAws, faJava, faCss3Alt, faHtml5, faAngular, faGit, faVuejs, faPhp } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase, faCodeBranch, faCubes, faTerminal,faLink,faDotCircle, faTasks, faAngleRight, faFileCode, faLaptopCode, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
import { IAbout } from '../models/about'
import { ISkills } from '../models/skills'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   AboutData = AboutData;
   faJsSquare = faJsSquare;
   faNodeJs = faNodeJs;
   faAws = faAws;
   faJava = faJava;
   faCss3Alt = faCss3Alt;
   faHtml5 = faHtml5; 
   faDatabase = faDatabase;
   faCodeBranch = faCodeBranch; 
   faAngular = faAngular;
   faCubes = faCubes;
   faTerminal = faTerminal;
   faLink = faLink;
   faTasks = faTasks; 
   faDotCircle = faDotCircle; 
   faAngleRight = faAngleRight;
   faGit = faGit; 
   faFileCode = faFileCode; 
   faLaptopCode = faLaptopCode;
   faVuejs = faVuejs; 
   faPhp = faPhp;
   faChevronRight = faChevronRight; 

   example = 'fa fab-facebook';

   myimage: string = "assets/images/IMG_9021.jpg";

  mySkills: ISkills[] = 
  [
    {title:'Programming Languages', skills:['Java','Javascript','HTML5', 'CSS3', 'Typescript', 'SQL'], icons:[faJava,faJsSquare,faHtml5,faCss3Alt,faDotCircle, faDatabase]},
    {title:'Libraries & Frameworks',skills:['Angular','Node.js','Express.js'],icons:[faAngular,faNodeJs, faAngleRight]},
    {title:'Tools & Platforms', skills:['Git(Github)','Visual Studio Code','MySQL', 'OS - Mac,Windows,Linux'],icons:[faGit,faFileCode,faDatabase, faLaptopCode]},
    {title:'Working Knowledge',skills:['PHP','AWS','Vue.js'],icons:[faPhp, faAws, faVuejs]}
  ]





  constructor() { 

    
  }

  ngOnInit(): void {
  }


}
