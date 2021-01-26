import { Component, OnInit } from '@angular/core';
import { AboutData } from '../data/about.data'
import { faJsSquare, faNodeJs, faAws, faJava, faCss3Alt, faHtml5, faAngular } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase, faCodeBranch, faCubes, faTerminal,faLink,faDotCircle, faTasks } from '@fortawesome/free-solid-svg-icons'; 
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


   example = 'fa fab-facebook';

   myimage: string = "assets/images/IMG_9021.jpg";

  mySkills: ISkills[] = 
  [
  {title:'Programming Languages', skills:['Java','Javascript','HTML5', 'CSS3', 'PHP', 'SQL', 'Typescript']},
  {title:'Libraries & Frameworks',skills:['Angular','Node.js','Express.js']},
  {title:'Tools & Platforms', skills:['Git(Github)','Visual Studio Code','MySQL','SQL Server', 'Mac', 'iOS', 'Windows', 'Linux']},
  {title:'Working Knowledge',skills:['PHP','AWS','Vue.js']}
  ]





  constructor() { 

    
  }

  ngOnInit(): void {
  }


}
