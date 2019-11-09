import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatrocinioListComponent } from "./patrocinio-list/patrocinio-list.component";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { PatrocinioService } from "./patrocinio.service";

@NgModule({
    imports: [CommonModule, AppRoutingModule],
    declarations: [PatrocinioListComponent],
    exports: [PatrocinioListComponent],
    providers: [PatrocinioService]
})
export class PatrocinioModule { }
 