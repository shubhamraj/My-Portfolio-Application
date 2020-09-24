import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyContactProfileComponent } from './my-contact-profile/my-contact-profile.component';
import { MyPersonalProfileComponent } from './my-personal-profile/my-personal-profile.component';
import { MyPofessionalProfileComponent } from './my-pofessional-profile/my-pofessional-profile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';



const routes: Routes = [
  {
    path: '',
    component: MyProfileComponent,
    children:[
      { path: "", redirectTo: "my-professional-profile", pathMatch: "full" },
      {path:'my-personal-profile',component:MyPersonalProfileComponent},
      {path:'my-professional-profile',component:MyPofessionalProfileComponent},
      {path:'my-contact-profile',component:MyContactProfileComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
