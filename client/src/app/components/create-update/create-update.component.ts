import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PopulationdataService} from '../../shared/populationdata.service';
import {Model} from '../../model';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  private populationdata:Model;
  constructor(private populationdataService:PopulationdataService , private router:Router ) { }

  ngOnInit() {
    this.populationdata = this.populationdataService.getter();
  }
  CreateOrUpdate(){
    if(this.populationdata._id == undefined){
      this.populationdataService.createModel(this.populationdata).subscribe(
        data=>{
          this.router.navigate(['/']);
        },
        error=>{
          console.log(error);
        }
      )
    }else{
      this.populationdataService.updateModel(this.populationdata).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/']);
        },
        error=>{
          console.log(error);
        }

      )
    }

  }
}
