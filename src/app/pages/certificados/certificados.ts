import { Component } from '@angular/core';
import { SecondaryButton } from "../../shared/secondary-button/secondary-button";
import { ItemCertificado } from "../../components/item-certificado/item-certificado";
import { PageHeader } from "../../shared/page-header/page-header";

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, ItemCertificado, PageHeader],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
