import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import { IricComponent } from './grupos/iric/iric.component';
import { OperasBasComponent } from './grupos/formularios/operas-bas/operas-bas.component';

const routes:Routes=[
    {path: '', redirectTo: '/home', pathMatch:'full'}, //Esta primera es la redireccion a home
    {path: 'IricComponent', component: IricComponent},
    {path: 'OperasBasComponent', component: OperasBasComponent}
];

@NgModule({
    imports:[(RouterModule.forRoot(routes))],
    exports:[RouterModule]
})
export class AppRoutingModule{}