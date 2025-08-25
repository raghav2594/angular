import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { DeleteComponent } from './components/delete/delete.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : '',
        pathMatch : 'full'
    },
    {
        path : 'create',
        component : CreateComponent
    },
    {
        path : 'update',
        component : UpdateComponent
    },
    {
        path : 'fetch',
        component : FetchComponent
    },
    {
        path : 'delete',
        component : DeleteComponent
    }
];
