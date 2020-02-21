export class Noticia {
    id: number;
    titulo: string;
    imagen: string;
    fecha: string;
    textoCorto: string;
    textoNoticia: string;

    constructor() {
        this.id = 0;
        this.titulo = '';
        this.imagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Marca.svg/1200px-Marca.svg.png';
        this.fecha = '';
        this.textoCorto = '';
        this.textoNoticia = '';
    }
}