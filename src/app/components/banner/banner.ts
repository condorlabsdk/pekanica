import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PrimaryButton } from "../primary-button/primary-button";

interface BannerSlide {
  title: string;
  text: string;
  img: string;
  bg: string;
}

@Component({
  selector: 'app-banner',
  imports: [PrimaryButton, NgFor],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner {

  slides: BannerSlide[] = [
    {
      title: 'Cafe Bio Dinamico, Selva Peruana',
      text: 'Cafe de Especialidad Peruano totalmente organico, cultivado por campesinos shipibos, que tienen una historia de generacion en generacion para alimentarse de estos arboles sagrados.',
      img: '/banner/misha.jpeg',
      bg: '/banner/misha.jpeg'
    },
    {
      title: 'Nuevas colecciones',
      text: 'Explora lo último en tendencias y recibe descuentos exclusivos en tu primera compra.',
      img: 'https://helios-i.mashable.com/imagery/articles/06bDxcWuGigquxJpussvag6/images-35.fill.size_2000x1078.v1631498705.jpg',
      bg: '/banner/baner-cafe.png',
    },
    {
      title: 'Entrega rápida',
      text: 'Compra hoy y recibe tus productos en menos de 48 horas. ¡Envíos a todo el país!',
      img: 'https://helios-i.mashable.com/imagery/articles/06bDxcWuGigquxJpussvag6/images-35.fill.size_2000x1078.v1631498705.jpg',
      bg: '/banner/baner-cafe2.jpeg',
    }
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide < this.slides.length - 1) ? this.currentSlide + 1 : 0;
  }

}
