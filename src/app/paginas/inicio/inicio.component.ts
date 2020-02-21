import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { NoticiasService } from 'src/app/providers/noticia.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  noticias: Array<Noticia>;
  noticiaSeleccionada: Noticia;
  noticiaCreada: Noticia;
  titulo: string;
  formularioNoticia: FormGroup;

  constructor(private builder: FormBuilder, private servicioNoticias: NoticiasService) { 
    console.debug('InicioComponent Constructor');
    this.titulo = 'Noticias'
    this.noticias = [];

    // Construir Formulario.
    this.formularioNoticia = this.builder.group({
      // Definir Valores del Formulario.
      id: new FormControl(0),
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      )],
      imagen: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Marca.svg/1200px-Marca.svg.png', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(500)]
      )],
      fecha: ['', Validators.compose(
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      )],
      textoCorto: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      )],
      textoNoticia: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(500)]
      )]
    }); // Formulario Noticia Constructor
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

  enviar(values: any) {
    console.debug('InicioComponent Enviar Formulario Noticia %o ', values);
    let noticia = new Noticia();
    noticia.titulo = values.titulo;
    noticia.imagen = values.imagen;
    noticia.fecha = values.fecha;
    noticia.textoCorto = values.textoCorto;
    noticia.textoNoticia = values.textoNoticia;

    this.servicioNoticias.createNoticia(noticia).subscribe(
      datos => {
        console.debug('Estas en el Subscribe');
        this.noticiaCreada = datos;
        this.listarNoticias();
      },
      error => {
        console.warn(error);
      },
      () => {
        console.debug('Esto se hace Siempre');
      }
    );

    //Resetar Formulario e Inicializar
    this.formularioNoticia.reset({
      titulo: '',
      imagen: '',
      fecha: '',
      textoCorto: '',
      textoNoticia: ''
    });   

    $("#btn-close").click();
  } // Enviar Formulario

} // InicioComponent
