import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopulationdataService} from './shared/populationdata.service';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes:Routes=[
  {path: '',component:ListComponent},
  {path:'createUpdate',component:CreateUpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PopulationdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
