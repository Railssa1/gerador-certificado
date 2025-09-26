import { Component } from '@angular/core';
import { PageHeader } from "../../shared/page-header/page-header";
import { SecondaryButton } from "../../shared/secondary-button/secondary-button";
import { PrimaryButton } from "../../shared/primary-button/primary-button";

@Component({
  selector: 'app-certificado-form',
  imports: [PageHeader, SecondaryButton, PrimaryButton],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

}
