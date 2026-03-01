import { Component } from '@angular/core';
import { SobreMimComponent } from '../sobre-mim/sobre-mim.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { CertificadosComponent } from '../certificados/certificados.component';
import { EducacaoComponent } from '../educacao/educacao.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { ProjetosComponent } from '../projetos/projetos.component';

@Component({
  selector: 'app-imprimir',
  standalone: true,
  imports: [
    SobreMimComponent,
    ExperienciaComponent,
    CertificadosComponent,
    EducacaoComponent,
    HabilidadesComponent,
    ProjetosComponent
  ],
  template: `
    <button (click)="imprimir()" style="margin-bottom: 20px;">Imprimir</button>
    <app-sobre-mim></app-sobre-mim>
    <app-experiencia></app-experiencia>
    <app-certificados></app-certificados>
    <app-educacao></app-educacao>
    <app-habilidades></app-habilidades>
    <app-projetos></app-projetos>
  `
})
export class ImprimirComponent {
  imprimir() {
    window.print();
  }
}