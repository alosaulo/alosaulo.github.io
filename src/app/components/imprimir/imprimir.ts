import { Component } from '@angular/core';
import { SobreMimComponent } from "../sobre-mim/sobre-mim.component";
import { CertificadosComponent } from "../certificados/certificados.component";
import { ExperienciaComponent } from "../experiencia/experiencia.component";
import { EducacaoComponent } from "../educacao/educacao.component";
import { HabilidadesComponent } from "../habilidades/habilidades.component";
import { ProjetosComponent } from "../projetos/projetos.component";
import { ContatoComponent } from "../contato/contato.component";
import { EventosComponent } from "../eventos/eventos";

@Component({
  selector: 'app-imprimir',
  standalone: true,
  imports: [SobreMimComponent, CertificadosComponent, ExperienciaComponent, EducacaoComponent, HabilidadesComponent, ProjetosComponent, ContatoComponent, EventosComponent],
  templateUrl: './imprimir.html',
  styleUrl: './imprimir.scss',
})
export class Imprimir {

}
