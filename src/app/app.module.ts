import { TokenInterceptorService } from './token-interceptor.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LoginService } from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MedecinComponent } from './medecin/medecin.component';
import { ModalEditMedecinComponent } from './modal-edit-medecin/modal-edit-medecin.component';
import { ModalConfirmDialogComponent } from './modal-confirm-dialog/modal-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccessDeniedComponent,
    PageNotFoundComponent,
    MedecinComponent,
    ModalEditMedecinComponent,
    ModalConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ ModalEditMedecinComponent, ModalConfirmDialogComponent ]
})
export class AppModule { }
