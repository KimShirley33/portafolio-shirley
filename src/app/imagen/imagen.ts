import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen.html',
  styleUrls: ['./imagen.css']
})
export class ImagenComponent {
  @Input() imagen!: { id: number; titulo: string; descripcion?: string; url: string; categoria?: string };
  @Output() seleccionada = new EventEmitter<any>();

  alHacerClic() {
    this.seleccionada.emit(this.imagen);
  }
}
