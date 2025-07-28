import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Banner } from "../../components/banner/banner";
import { Gallery } from "../../components/gallery/gallery";
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { Products } from "../../components/products/products";
import { Certifications } from "../../components/certifications/certifications";

@Component({
  selector: 'app-home',
  imports: [Header, Banner, Gallery, PrimaryButton, Products, Certifications],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
