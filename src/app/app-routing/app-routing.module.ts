import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { MemoriaListComponent } from '../memoria/memoria-list/memoria-list.component';
import { MemoriaCreateComponent } from '../memoria/memoria-create/memoria-create.component';

import { MedioDePagoListComponent } from '../medioDePago/medioDePago-list/medioDePago-list.component';

import { EventoDetailComponent } from '../evento/evento-detail/evento-detail.component';
import { EventoListComponent } from '../evento/evento-list/evento-list.component';
import { EventoCreateComponent } from "../evento/evento-create/evento-create.component";

import { UsuarioListComponent } from '../usuario/usuario-list/usuario-list.component';
import { UsuariosCreateComponent } from "../usuario/usuario-create/usuario-create.component";
import { PatrocinioListComponent } from '../patrocinio/patrocinio-list/patrocinio-list.component';
import { LugarListComponent } from '../lugar/lugar-list/lugar-list.component';
import { LugarCreateComponent } from '../lugar/lugar-create/lugar-create.component';
import { PagoListComponent } from '../pago/pago-list/pago-list.component';
import { PseListComponent } from '../pse/pse-list/pse-list.component';
import { TarjetaListComponent } from '../tarjeta/tarjeta-list/tarjeta-list.component';
import { TarjetaAddComponent } from '../medioDePago/tarjeta/tarjeta-add/tarjeta-add.component';
import { ActividadEventoCreateComponent } from '../actividadevento/actividadevento-create/actividadevento-create.component';
const routes: Routes = [

    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['INVITADO']
                    }
                } 
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['INVITADO']
                    }
                }
            }
        ]
    },
    {
        path: 'memorias',
        children: [
            {
                path: 'list',
                component: MemoriaListComponent
            },
            { path: "add", component: MemoriaCreateComponent }]
    },
    {
        path: 'actividades',
        children: [
            { path: "add", component: ActividadEventoCreateComponent }]
    },
    {
        path: 'medioDePago',
        children: [
            {
                path: 'list',
                component: MedioDePagoListComponent
            }
        ]

    },
    {
        path: 'tarjetas',
        children: [
            {
                path: 'list',
                component: TarjetaListComponent
            }
        ]

    },
    {
        path: "usuarios",
        children: [
            { path: "list", component: UsuarioListComponent },
            { path: "add", component: UsuariosCreateComponent },
            { path: ":id/tarjetas", component: TarjetaAddComponent}
        ]

    },
    {
        path: 'patrocinios',
        children: [
            {
                path: 'list',
                component: PatrocinioListComponent
            }
        ]

    },
    {
        path: 'lugares',
        children: [
            {
                path: 'list',
                component: LugarListComponent
            },
            { path: 'add', component: LugarCreateComponent }
        ]

    },
    {
        path: 'pagos',
        children: [
            {
                path: 'list',
                component: PagoListComponent
            }
        ]

    },
    {
        path: 'pses',
        children: [
            {
                path: 'list',
                component: PseListComponent
            }
        ]

    },
    {
        path: "eventos",
        children: [
            { path: "list", component: EventoListComponent },
            { path: "add", component: EventoCreateComponent },

            {
                path: ":id",
                component: EventoDetailComponent,
                outlet: "detail"
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
