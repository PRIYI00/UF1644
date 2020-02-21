import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { NoticiasService } from 'src/app/providers/noticia.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  noticias: Array<Noticia>;
  noticiaSeleccionada: Noticia;
  titulo: string;

  constructor(private servicioNoticias: NoticiasService) { 
    console.debug('InicioComponent Constructor');
    this.titulo = 'Noticias'
    this.noticias = [];
  } // InicioComponent

  ngOnInit() {
    console.debug('InicioComponent ngOnInit');
    this.listarNoticias();
  } // ngOnInit

  private listarNoticias(): void {
    console.debug('Metodo Listar Noticias');
    this.servicioNoticias.getAllNoticias().subscribe(
      datos => {
        console.debug('Estas en el Subscribe');
        this.noticias = datos;
      },
      error => {
        console.warn(error);
      },
      () => {
        console.debug('Esto se hace Siempre');
      }
    );
  } // ListarNoticias

} // InicioComponent
