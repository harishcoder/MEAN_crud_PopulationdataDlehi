import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Model} from '../model';

@Injectable({
  providedIn: 'root'
})
export class PopulationdataService {
  private populationdata:Model;
  private baseUri:string="http://localhost:3000";
  private headers = new HttpHeaders().set('content-type','application/json');
  constructor(private http:HttpClient) {}
    createModel(data:Model){
      return this.http.post(this.baseUri+'/create',data,{headers:this.headers});
    }
    readModel(){
      return this.http.get<any[]>(this.baseUri+'/read',{headers:this.headers});
    }
    updateModel(data:Model){
      return this.http.put(this.baseUri+'/Update',data,{headers:this.headers});
    }
    deleteModel(id:string){
      return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
    }
    setter(populationdata:Model){
      this.populationdata = populationdata;
    }
    getter(){
      return this.populationdata;
    }
}
