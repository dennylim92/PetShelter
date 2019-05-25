import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AllpetsComponent } from './allpets/allpets.component';
import { AddpetComponent } from './addpet/addpet.component';
import { OnepetComponent } from './onepet/onepet.component';
import { EditpetComponent } from './editpet/editpet.component';



@NgModule({
  declarations: [
    AppComponent,
    AllpetsComponent,
    AddpetComponent,
    OnepetComponent,
    EditpetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
