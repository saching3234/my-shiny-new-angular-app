import { NgModule } from '@angular/core';
import {HttpClientModule  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { TransformDirective } from './directive/transform.directive';
import { SafePipe } from './pipes/safe.pipe';
import { ChatComponent } from './componets/chat/chat.component';
import { StringInterpolationComponent } from './componets/binding/string-interpolation/string-interpolation.component';
import { EventBindingComponentComponent } from './componets/event-binding-component/event-binding-component.component';
import { HelloComponent } from './componets/hello/hello.component';
import { CounterActionComponent } from './componets/counter-action/counter-action.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributebindingexpComponent } from './componets/attributebindingexp/attributebindingexp.component';
import { ClassbindingexpComponent } from './componets/classbindingexp/classbindingexp.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { UserService } from './services/user/user.service';
import { ParentComponent } from './components/parent/parent.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { BuiltInStrDirComponent } from './components/built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from './components/built-in-attr-dir/built-in-attr-dir.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ChildComponent } from './components/child/child.component';
import { InterviewQuetionsAnsComponent } from './components/interview-quetions-ans/interview-quetions-ans.component';
import { MyserviceService } from './services/myservice.service';
import { MycomponentComponent } from './components/mycomponent/mycomponent.component';
import { DemoforInputPropParentChildComponent } from './components/demofor-input-prop-parent-child/demofor-input-prop-parent-child.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserComponent,
    TransformDirective,
    SafePipe,
    ChatComponent,
    StringInterpolationComponent,
    EventBindingComponentComponent,
    HelloComponent,
    CounterActionComponent,
    AttributebindingexpComponent,
    ClassbindingexpComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    UsersComponent,
    UserDetailsComponent,
    PlaceholderComponent,
    MessageListComponent,
    ParentComponent,
    OneComponent,
    TwoComponent,
    BuiltInStrDirComponent,
    BuiltInAttrDirComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ChildComponent,
    InterviewQuetionsAnsComponent,
    MycomponentComponent,
    DemoforInputPropParentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {   
}
