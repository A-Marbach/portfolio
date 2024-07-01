import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  developments = [
    {
      'title': 'Join',
      'skills': 'JavaScript | HTML | CSS',
      'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
      'img': 'assets/join.png',
      'url': 'https://join.artur-marbach.de',
      'github': 'https://github.com/A-Marbach/join'
    },
    {
      'title': 'El-pollo-loco',
      'skills': 'JavaScript | HTML | CSS',
      'description': 'A simple Jump-and-Run game based on a object-oriented approach. Help Pepe to find coins and bottles to fight against the killer chicken',
      'img': 'assets/pollo-loco.png',
      'url': 'https://el-pollo-loco.artur-marbach.de',
      'github': 'https://github.com/A-Marbach/el-pollo-loco'
    },
    // {
    //   'title': 'Simple CRM',
    //   'skills': 'Angular | Firebase',
    //   'description': 'A very Simple Customer Relationship Management system working with CRUD functionality',
    //   'img': 'assets/crm.png',
    //   'url': '',
    //   'github': ''
    // }
    
  ]
  sendToUrl(url:string){
    window.open(url);
  }
  constructor() {
   
  }
}
