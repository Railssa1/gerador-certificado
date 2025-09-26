import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { ItemCertificado } from "./components/item-certificado/item-certificado";
import { SecondaryButton } from './shared/secondary-button/secondary-button';
import { BaseUi } from './shared/base-ui/base-ui';
import { Certificados } from "./pages/certificados/certificados";
import { CertificadoForm } from "./pages/certificado-form/certificado-form";

@Component({
  selector: 'app-root',
  imports: [Navbar, BaseUi, Certificados, CertificadoForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
