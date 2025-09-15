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
      title: 'Blend Coffee, from Peruvian Jungle',
      text: 'Cafe de Especialidad Peruano totalmente organico, cultivado por campesinos shipibos, que tienen una historia de generacion en generacion para alimentarse de estos arboles sagrados.',
      img: '/banner/blend.png',
      bg: '/banner/misha.jpeg'
    },
    {
      title: 'Pecans from the Peruvian Ica Valley',
      text: 'Directamente desde los fértiles valles de Ica, Perú, te traemos la famosa Pecana Maja, conocida por ser la nuez más grande, sabrosa y cremosa del continente.',
      img: '/banner/teja.png',
      bg: 'https://i.blogs.es/6fba03/pecan-pie2/840_560.jpg',
    },
    {
      title: 'Olives and Olive Oil from Tacna, Perú',
      text: 'Tacna olives are the ninth Peruvian Denomination of Origin. Tacna olives have their own characteristics, as they are grown at an altitude of between 25 and 800 meters above sea level.',
      img: '/banner/vitaoliva.png',
      bg: '/banner/bg-vitaoliva.jpeg',
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
