import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TodoServiceService } from './todo-service.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChildComponent, ParentComponent ],
  bootstrap:    [ AppComponent ],
  providers :[ TodoServiceService ]
})
export class AppModule { }
