import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:Number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!: string;

  showImage():void{
    this.muestraImg=!this.muestraImg
  }
  // si esta en true lo ponga en false y vicerversa

  
  alumnosIric:IAlumnosIric[]=[
    {
      matricula:1234,
      nombre:'Michael Jackson',
      edad:40,
      correo: 'pedro@gmail.com',
      foto:'https://www.biografiasyvidas.com/biografia/j/fotos/jackson_michael_1.jpg',
      calif: 3
    },
    {
      matricula:772,
      nombre:'Scarlett Johansson',
      edad:23,
      correo: 'paulina@gmail.com',
      foto:'https://hips.hearstapps.com/hmg-prod/images/scarlett-johansson-attends-an-event-hosted-by-david-yurman-news-photo-1669029016.jpg',
      calif: 10
    },
    {
      matricula:5678,
      nombre:'Adrew Garfield',
      edad:30,
      correo: 'adrew@gmail.com',
      foto:'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/03/andrew-garfield-spider-man.jpg?resize=1200%2C751&quality=50&strip=all&ssl=1',
      calif: 8
    }
  ]
  
    onCalificaClick(message:string){
    this.alumnoTitle=`alumnos ${message}`;
}
}
/* alan */
