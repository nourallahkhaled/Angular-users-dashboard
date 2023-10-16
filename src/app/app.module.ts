import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './container/headline/headline.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ContainerComponent } from './container/container.component';
import { DashboardCardsComponent } from './container/dashboard-cards/dashboard-cards.component';
import { UsersTableComponent } from './container/users-table/users-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './container/users-table/user-profile/user-profile.component'

const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'Home', component: ContainerComponent},
  {path: 'Profile', component: MyProfileComponent},
  {path: 'Users/User/:id', component: UserProfileComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    SidebarMenuComponent,
    ContainerComponent,
    DashboardCardsComponent,
    UsersTableComponent,
    MyProfileComponent,
    NotFoundComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
