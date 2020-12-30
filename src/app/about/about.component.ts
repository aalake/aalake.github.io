import { Component, OnInit } from '@angular/core';
import { AboutData } from '../data/about.data'
import { faJsSquare, faNodeJs, faAws, faJava, faCss3Alt, faHtml5, faAngular } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase, faCodeBranch, faCubes, faTerminal,faLink,faDotCircle, faTasks } from '@fortawesome/free-solid-svg-icons'; 


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


   myimage: string = "assets/images/IMG_9021.jpg";

  constructor() { 
    // let frontendSkills: string[];
    
    // for(let i = 0; i < AboutData.frontendSkills.length;i++)
    // {
    //   console.log(AboutData.frontendSkills[i])
        
    // }

  }

  ngOnInit(): void {
  }


}
