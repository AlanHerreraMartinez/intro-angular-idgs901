import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {


  alumnosIric:any[]=[
    {
      matricula:1234,
      nombre:'Michael Jackson',
      edad:40,
      correo: 'pedro@gmail.com',
      foto:'https://www.biografiasyvidas.com/biografia/j/fotos/jackson_michael_1.jpg'
    },
    {
      matricula:772,
      nombre:'Scarlett Johansson',
      edad:23,
      correo: 'paulina@gmail.com',
      foto:'https://hips.hearstapps.com/hmg-prod/images/scarlett-johansson-attends-an-event-hosted-by-david-yurman-news-photo-1669029016.jpg'
    },
    {
      matricula:5678,
      nombre:'Adrew Garfield',
      edad:30,
      correo: 'adrew@gmail.com',
      foto:'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/03/andrew-garfield-spider-man.jpg?resize=1200%2C751&quality=50&strip=all&ssl=1'
    }
  ]
}

