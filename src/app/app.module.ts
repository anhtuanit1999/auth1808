import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PreventResignInGuard } from './prevent-resign-in.guard';
import { AboutComponent } from './about/about.component';
import { AuthFakeComponent } from './auth-fake/auth-fake.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routerConfig: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent, canActivate: [PreventResignInGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    AboutComponent,
    AuthFakeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    FormsModule,
    HttpModule
  ],
  providers: [AuthGuard, PreventResignInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
