import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss'
})
export class PrimaryButton {
  label = input('')

  btnClicked = output();
}
