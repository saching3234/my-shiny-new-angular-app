import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { BuiltInAttrDirComponent } from './components/built-in-attr-dir/built-in-attr-dir.component';
import { BuiltInStrDirComponent } from './components/built-in-str-dir/built-in-str-dir.component';
import { DemoforInputPropParentChildComponent } from './components/demofor-input-prop-parent-child/demofor-input-prop-parent-child.component';
import { HomeComponent } from './components/home/home.component';
import { InterviewQuetionsAnsComponent } from './components/interview-quetions-ans/interview-quetions-ans.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ParentComponent } from './components/parent/parent.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'parent',component:ParentComponent},
  {path:'built-in-str',component:BuiltInStrDirComponent},
  {path:'built-in-attr',component:BuiltInAttrDirComponent},
  {path:'template-form',component:TemplateDrivenFormComponent},
  {path:'reactive-form', component:ReactiveFormComponent},
  {path:'inputDemo',component:DemoforInputPropParentChildComponent},
  {path:'app-interview-quetions-ans', component:InterviewQuetionsAnsComponent},
  //can activate guard is used for blog route
  {path:'blog',component:BlogComponent,  canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent},  
  //confirmation guard implement on message route
  {path:'message',component:MessageListComponent,canDeactivate:[ConfirmationGuard]},
  //children routes 
  {path:'users',component:UsersComponent,
  //can activet child gurd used here
  canActivateChild:[AuthGuard],
  children:[
    {path:':id',component:UserDetailsComponent}
    //{path:'',component:PlaceholderComponent,pathMatch:'full'}
  ]


},
  {path:'',component:HomeComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  providers:[AuthGuard,ConfirmationGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
