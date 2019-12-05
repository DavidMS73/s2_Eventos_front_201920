import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MedioDePagoService } from '../medioDePago.service';
import { PseAddComponent } from './pse-add/pse-add.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule ],
    declarations: [PseAddComponent],
    providers: [MedioDePagoService],
    exports: [PseAddComponent]

})
export class PseModule{

}