import { Component } from '@angular/core';
import { GaleriaComponent } from './galeria/galeria';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GaleriaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'galeria-angular';
}
