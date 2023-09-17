import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './container/headline/headline.component';
import { SidebarMenuComponent } from './container/sidebar-menu/sidebar-menu.component';
import { ContainerComponent } from './container/container.component';
import { DashboardCardsComponent } from './container/dashboard-cards/dashboard-cards.component';
import { UsersTableComponent } from './container/users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    SidebarMenuComponent,
    ContainerComponent,
    DashboardCardsComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
