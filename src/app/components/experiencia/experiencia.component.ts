import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Cargo {
  titulo: string;
  periodo: string;
  duracao: string;
  descricao: string;
  habilidades: string[];
}

interface Experiencia {
  empresa: string;
  cargos: Cargo[];
}

interface Curriculo {
  apresentacao: string;
  experiencias: Experiencia[];
}

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent implements OnInit {
  curriculo!: Curriculo;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Curriculo>('/data/experiencia.json').subscribe({
      next: (data) => {
        console.log('Curriculo carregado:', data);
        this.curriculo = data;
      },
      error: (err) => {
        console.error('Erro ao carregar JSON:', err);
      }
    });
  }

}
