import { Component, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'; 
import { ISkills } from '../models/skills'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
   faCaretRight = faCaretRight; /* right arrow for job titles */


   example = 'fa fab-facebook';

   myimage: string = "assets/images/IMG_9021.jpg";
   twoimage: string = "assets/images/IMG_2.JPG"
   threeimage: string = "assets/images/IMG_3.jpg"
   fourimage: string = "assets/images/IMG_4.JPG"


  mySkills: ISkills[] = 
  [
    {title:'Programming Languages', skills:['Java','Javascript','HTML5','CSS3','Typescript','SQL']}, 
    {title:'Libraries & Frameworks',skills:['Angular','Node.js','Express.js']}, 
    {title:'Tools & Platforms', skills:['Git(Github)','Visual Studio Code','MySQL', 'OS - Mac,Windows,Linux']},
    {title:'Working Knowledge',skills:['PHP','AWS','Vue.js']}
  ]

  constructor() { 

    
  }

  ngOnInit(): void {
  }


}
