import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { ItemCertificado } from "./components/item-certificado/item-certificado";
import { SecondaryButton } from './shared/secondary-button/secondary-button';
import { BaseUi } from './shared/base-ui/base-ui';

@Component({
  selector: 'app-root',
  imports: [Navbar, ItemCertificado, SecondaryButton, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
