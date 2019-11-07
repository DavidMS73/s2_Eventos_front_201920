import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthModule } from './auth/auth.module';
import { MemoriaModule } from '../app/memoria/memoria.module';
import { MedioDePagoModule } from '../app/medioDePago/medioDePago.module';
import { EventoModule } from './evento/evento.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { LugarModule } from './lugar/lugar.module';
import { MultimediaModule } from './multimedia/multimedia.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        MemoriaModule,
        MedioDePagoModule,
        EventoModule,
        UsuarioModule,
        TarjetaModule,
        LugarModule,
        MultimediaModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule { }
