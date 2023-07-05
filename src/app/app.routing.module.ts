import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import { IricComponent } from './grupos/iric/iric.component';
import { OperasBasComponent } from './grupos/formularios/operas-bas/operas-bas.component';
import { HomeComponent } from './home/home.component';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';

const routes:Routes=[
    {path: 'HomeComponent', component: HomeComponent}, //Esta primera es la redireccion a home pathMatch:'full'
    {path: 'IricComponent', component: IricComponent},
    {path: 'OperasBasComponent', component: OperasBasComponent},
    {path: 'AlumnoReactiveComponent', component: AlumnoReactiveComponent}
];

@NgModule({
    imports:[(RouterModule.forRoot(routes))],
    exports:[RouterModule]
})
export class AppRoutingModule{}