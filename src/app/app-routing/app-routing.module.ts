import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { MemoriaListComponent } from '../memoria/memoria-list/memoria-list.component';
import { MedioDePagoListComponent } from '../medioDePago/medioDePago-list/medioDePago-list.component';

import { EventoDetailComponent } from '../evento/evento-detail/evento-detail.component';
import { EventoListComponent } from '../evento/evento-list/evento-list.component';

import { UsuarioListComponent } from '../usuario/usuario-list/usuario-list.component';
import {PatrocinioListComponent} from '../patrocinio/patrocinio-list/patrocinio-list.component';
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
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: 'memorias',
        children: [
            {
                path: 'list',
                component: MemoriaListComponent
            }/*,
        {
            path: 'id',
            component: MemoriaDetailComponent
        }*/]
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
        path: 'usuarios',
        children: [
            {
                path: 'list',
                component: UsuarioListComponent
            }
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
        path: 'eventos',
        children: [{
            path: 'list',
            component: EventoListComponent
        },
        {
            path: ':id',
            component: EventoDetailComponent,
            outlet: 'detail'
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
