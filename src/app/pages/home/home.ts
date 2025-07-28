import { Component } from '@angular/core';
import { PrimaryButton } from '../../components/primary-button/primary-button';

@Component({
  selector: 'app-home',
  imports: [PrimaryButton],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  log() {
    console.log('red')
  }
}
