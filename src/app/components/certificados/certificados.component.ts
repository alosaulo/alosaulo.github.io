import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Certificado {
  titulo : string;
  descricao : string;
  instituicao : string;
  carga_horaria : string;
  data_conclusao : string;
}

@Component({
  selector: 'app-certificados',
  imports: [CommonModule],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent implements OnInit{
  certificados: Certificado[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Certificado[]>('/data/certificados.json').subscribe(data => {
      this.certificados = data;
    }, error => {
      console.error('Error loading certificados:', error);
    });
  }
  
}
