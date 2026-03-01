import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export interface Evento {
  nome: string;           // Nome do evento
  tipo?: string;          // Tipo (palestra, workshop, exposição, etc.)
  data: string;           // Data ou período
  local?: string;         // Local do evento
  descricao: string;      // Descrição detalhada
  imagens?: string[];     // Imagens relacionadas
}

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Evento[]>('/data/eventos.json').subscribe({
      next: (data) => this.eventos = data,
      error: (err) => console.error('Erro ao carregar eventos:', err)
    });
  }
}
