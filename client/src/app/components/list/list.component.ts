import { Component, OnInit } from '@angular/core';
import {PopulationdataService} from '../../shared/populationdata.service';
import { Model } from '../../model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 private populationdata:Model[];
  constructor(private _populationdataService:PopulationdataService,private router:Router) { }

  ngOnInit() {
    this.readpopulationdata();
  }

//Get data from database
readpopulationdata(){
  this._populationdataService.readModel().subscribe(
    data=>{
      this.populationdata=data;
    },
    error=>{
      console.log(error);
    }
  )
}

//Update the data
update(populationdata){

  this._populationdataService.setter(populationdata);
  this.router.navigate(['/createUpdate']);
}

//delete the data
delete(population){
  this._populationdataService.deleteModel(population._id).subscribe(
    data=>{
      this.populationdata.splice(this.populationdata.indexOf(population),1);
    },
    error=>{
      console.log(error);
    }
  )
}
}
