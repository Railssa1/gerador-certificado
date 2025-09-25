import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { ItemCertificado } from "./components/item-certificado/item-certificado";

@Component({
  selector: 'app-root',
  imports: [Navbar, ItemCertificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
