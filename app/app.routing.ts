import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUserComponent } from './about/about-user.component';

//              for validation
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'about/:userName', component: AboutUserComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent} // order is important, if it was first we will get only 404 page always 
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);