import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { MenuItem } from 'primeng/components/common/api';
import { MenubarModule } from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PanelMenuModule } from 'primeng/panelmenu';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    AccordionModule,
    MenuModule,
    MenubarModule,
    PanelMenuModule
],
 schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
