import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Projeto {
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
  imagens?: string[];
}

@Component({
  selector: 'app-projetos',
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent implements OnInit {
  projetos: Projeto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Projeto[]>('/data/projetos.json').subscribe({
      next: (data) => this.projetos = data,
      error: (err) => console.error('Erro ao carregar projetos:', err)
    });
  }
}