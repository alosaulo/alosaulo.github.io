// app.routes.ts ou app-routing.module.ts

import { Routes } from '@angular/router';

// Importe todos os componentes que deseja associar a cada rota
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { ContatoComponent } from './components/contato/contato.component';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';

export const routes: Routes = [
    { path: '', redirectTo: 'sobre', pathMatch: 'full' },   // Rota padrão, redireciona para /sobre
    { path: 'sobre', component: SobreMimComponent },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: 'certificados', component: CertificadosComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'educacao', component: EducacaoComponent },
    { path: 'habilidades', component: HabilidadesComponent },
    { path: 'projetos', component: ProjetosComponent },
  // { path: 'qualquer-outra', component: OutroComponent },

  // Rota curinga para tratar URLs não encontradas
  { path: '**', component: NotFoundComponent },
];