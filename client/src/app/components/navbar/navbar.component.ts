import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PopulationdataService} from '../../shared/populationdata.service';
import {Model} from '../../model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private populationdataService:PopulationdataService) { }

  ngOnInit() {
  }
  newPopulationdata(event:any){
    event.preventDefault();
    this.populationdataService.setter(new Model);
    this.router.navigate(['/createUpdate']);
  }

}
