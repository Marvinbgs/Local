import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    setTimeout(() =>{
      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man - Far From Home',
          fechaLanzamiento: new Date(),
          precio: 1400.99
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2021-10-15'),
          precio: 300.99
        }
      ]
    }, 3000);
  }


  title = 'front-end';

  peliculasEnCines;
  peliculasProximosEstrenos = [
    {
      titulo: 'Avengers: End game',
      fechaLanzamiento: new Date(),
      precio: 1400.99
    },
    {
      titulo: 'Inception',
      fechaLanzamiento: new Date('2021-10-15'),
      precio: 300.99
    },
    {
      titulo: 'Rocky',
      fechaLanzamiento: new Date('2021-10-15'),
      precio: 300.99
    }
  ]

}
