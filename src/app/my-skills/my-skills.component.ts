import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})



export class MySkillsComponent {
  images = [
    'assets/javascript.png',
    'assets/typescript.png',
    'assets/angular.png',
    'assets/html.png',
    'assets/firebase.png',
    'assets/git.png',
    'assets/css.png',
    'assets/api.png',
    'assets/scrum.png',
    'assets/material-design.png',
    'assets/wordpress.png'
  ]

  title =[
    'Javascript',
    'Typescript',
    'Angular',
    'HTML',
    'Firebase',
    'Git',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material-Design',
    'Wordpress',
  ]
}
