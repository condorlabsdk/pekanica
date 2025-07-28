import { Component } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  log() {
    console.log('nice')
  }
}
