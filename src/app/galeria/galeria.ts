import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenComponent } from '../imagen/imagen';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, ImagenComponent],
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css']
})
export class GaleriaComponent {
  vistaActual: string = 'home';
  imagenSeleccionada: any = null;

  categorias = [
    { nombre: 'Eventos', cover: 'fotos/boda1.jpg', descripcion: 'Bodas, eventos sociales y corporativos' },
    { nombre: 'Retratos', cover: 'fotos/retrato1.jpg', descripcion: 'Retratos editoriales, familiares y de moda' },
    { nombre: 'Naturaleza', cover: 'fotos/paisaje1.jpg', descripcion: 'Paisajes, montañas y naturaleza' },
    { nombre: 'Comunidad', cover: 'fotos/comunidad1.jpg', descripcion: 'Cultura, tradición y vida rural' },
    { nombre: 'Productos', cover: 'fotos/comida1.jpg', descripcion: 'Fotografía gastronómica y de producto' },
    { nombre: 'Deportes', cover: 'fotos/deporte1.jpg', descripcion: 'Deporte, fitness y acción' },
  ];

  imagenes = [
    // EVENTOS
    { id: 1, titulo: 'Boda en la Playa', descripcion: 'Ceremonia al atardecer', categoria: 'Eventos', url: 'fotos/boda1.jpg' },
    { id: 2, titulo: 'Boda Íntima', descripcion: 'Sesión de pareja', categoria: 'Eventos', url: 'fotos/boda2.jpg' },
    { id: 3, titulo: 'Evento Cultural', descripcion: 'Celebración tradicional', categoria: 'Eventos', url: 'fotos/evento1.jpg' },
    { id: 4, titulo: 'Evento Social', descripcion: 'Cobertura de evento', categoria: 'Eventos', url: 'fotos/evento2.jpg' },
    { id: 5, titulo: 'Concierto', descripcion: 'Fotografía en vivo', categoria: 'Eventos', url: 'fotos/evento3.jpg' },
    { id: 6, titulo: 'Evento Corporativo', descripcion: 'Cobertura profesional', categoria: 'Eventos', url: 'fotos/evento4.jpg' },

    // RETRATOS
    { id: 7, titulo: 'Retrato Editorial', descripcion: 'Sesión de moda', categoria: 'Retratos', url: 'fotos/retrato1.jpg' },
    { id: 8, titulo: 'Retrato Natural', descripcion: 'Luz natural', categoria: 'Retratos', url: 'fotos/retrato2.jpg' },
    { id: 9, titulo: 'Retrato Artístico', descripcion: 'Dirección de arte', categoria: 'Retratos', url: 'fotos/retrato3.jpg' },
    { id: 10, titulo: 'Retrato Fashion', descripcion: 'Estilo editorial', categoria: 'Retratos', url: 'fotos/retrato4.jpg' },
    { id: 11, titulo: 'Sesión Infantil', descripcion: 'Fotografía familiar', categoria: 'Retratos', url: 'fotos/infantil1.jpg' },
    { id: 12, titulo: 'Maternidad', descripcion: 'Sesión madre e hijo', categoria: 'Retratos', url: 'fotos/infantil2.jpg' },

    // NATURALEZA
    { id: 13, titulo: 'Paisaje Andino', descripcion: 'Alturas y volcanes', categoria: 'Naturaleza', url: 'fotos/paisaje1.jpg' },
    { id: 14, titulo: 'Valle Dorado', descripcion: 'Paisaje serrano', categoria: 'Naturaleza', url: 'fotos/paisaje2.jpg' },
    { id: 15, titulo: 'Montaña y Campo', descripcion: 'Naturaleza abierta', categoria: 'Naturaleza', url: 'fotos/paisaje3.jpg' },
    { id: 16, titulo: 'Ciudad Histórica', descripcion: 'Arquitectura y cultura', categoria: 'Naturaleza', url: 'fotos/paisaje4.jpg' },
    { id: 17, titulo: 'Naturaleza en Detalle', descripcion: 'Macro naturaleza', categoria: 'Naturaleza', url: 'fotos/naturaleza1.jpg' },
    { id: 18, titulo: 'Fauna Silvestre', descripcion: 'Detalle natural', categoria: 'Naturaleza', url: 'fotos/naturaleza2.jpg' },
    { id: 19, titulo: 'Micro Mundo', descripcion: 'Fotografía macro', categoria: 'Naturaleza', url: 'fotos/naturaleza3.jpg' },
    { id: 20, titulo: 'Texturas Naturales', descripcion: 'Detalles del entorno', categoria: 'Naturaleza', url: 'fotos/naturaleza4.jpg' },

    // COMUNIDAD
    { id: 21, titulo: 'Comunidad Andina', descripcion: 'Retrato cultural', categoria: 'Comunidad', url: 'fotos/comunidad1.jpg' },
    { id: 22, titulo: 'Vida Rural', descripcion: 'Comunidad y tradición', categoria: 'Comunidad', url: 'fotos/comunidad2.jpg' },
    { id: 23, titulo: 'Cultura Viva', descripcion: 'Retrato etnográfico', categoria: 'Comunidad', url: 'fotos/comunidad3.jpg' },
    { id: 24, titulo: 'Paisaje Costero', descripcion: 'Costa ecuatoriana', categoria: 'Comunidad', url: 'fotos/comunidad4.jpg' },
    { id: 25, titulo: 'Río y Montaña', descripcion: 'Paisaje natural', categoria: 'Comunidad', url: 'fotos/comunidad5.jpg' },

    // PRODUCTOS
    { id: 26, titulo: 'Fotografía Culinaria', descripcion: 'Plato gourmet', categoria: 'Productos', url: 'fotos/comida1.jpg' },
    { id: 27, titulo: 'Food Styling', descripcion: 'Composición gastronómica', categoria: 'Productos', url: 'fotos/comida2.jpg' },
    { id: 28, titulo: 'Producto Saludable', descripcion: 'Fotografía de producto', categoria: 'Productos', url: 'fotos/comida3.jpg' },
    { id: 29, titulo: 'Detalle Gastronómico', descripcion: 'Alta cocina', categoria: 'Productos', url: 'fotos/comida4.jpg' },

    // DEPORTES
    { id: 30, titulo: 'Atleta Fitness', descripcion: 'Fotografía deportiva', categoria: 'Deportes', url: 'fotos/deporte1.jpg' },
    { id: 31, titulo: 'Entrenamiento', descripcion: 'Deporte y disciplina', categoria: 'Deportes', url: 'fotos/deporte2.jpg' },
  ];

  get imagenesDeCategoria() {
    return this.imagenes.filter(img => img.categoria === this.vistaActual);
  }

  get categoriaInfo() {
    return this.categorias.find(c => c.nombre === this.vistaActual);
  }

  entrarCategoria(nombre: string) {
    this.vistaActual = nombre;
    window.scrollTo(0, 0);
  }

  volverHome() {
    this.vistaActual = 'home';
    window.scrollTo(0, 0);
  }

  seleccionarImagen(img: any) {
    this.imagenSeleccionada = img;
  }

  cerrarModal() {
    this.imagenSeleccionada = null;
  }
}
