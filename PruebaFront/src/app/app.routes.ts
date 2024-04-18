import { Routes } from '@angular/router';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';


// export const routes: Routes = [{ path: 'UsuarioComponent' }];
export const routes: Routes = [
    {
        path:"",
        component:UsuarioListaComponent
    },
    {
        path:"usuario-lista",
        component:UsuarioListaComponent
    },
    {
        path:"usuario-crear",
        component:UsuarioFormComponent
    },
    {
        path:"usuario/:id",
        component:UsuarioFormComponent
    }
];