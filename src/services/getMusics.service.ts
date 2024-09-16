import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MusicsTableProps } from '../types/musicsTableProps';

@Injectable({
  providedIn: 'root'
})

// This service get the musics from the back-end (json-server in this case). But, if the get return a error, this service will return a default values ( This is good for don`t need install this application on the user Computer, and to use on mobile phone too)
export class getMusicsService {
  constructor(private http:HttpClient) { }

  getMusics(): Observable<Array<MusicsTableProps>> {
    return this.http.get<Array<MusicsTableProps>>('http://localhost:3000/musics').pipe(
      catchError(err => {
        // If the get return a error, this service will return the default values. Please, read the top of this service
        alert('🚨 Alerta 🚨: Você iniciou o site sem instalar a aplicação no seu computador (siga a documentação com o passo a passo no github se precisar) então vale ressaltar que neste modo você consegue ter acesso as músicas existentes mas não consegue deletar nenhuma!');
        console.log(`Ocorreu um erro a fazer a requisição. Mostrando os dados padrões... \nErro: ${err}`);
        return of(this.defaultMusics);
      })
    )
  }

  delete(music: MusicsTableProps): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/musics/${music.id}`);
  }

  defaultMusics: Array<MusicsTableProps> = [
    {
      id: 1,
      title: "Costa Gold - N.A.D.A.B.O.M pt. 2",
      album: "155",
      duration: "4:15",
      artistOrBand: "Costa Gold - feat: Luccas Carlos e Don L",
      genre: "Rap"
    },
    {
      id: 2,
      title: "SAMEHADA",
      album: "Samehada - Single",
      duration: "3:13",
      artistOrBand: "7 Minutoz - Gabriel Rodrigues e Lucas A.R.T. [Prod. tunnA Beatz]",
      genre: "Rap Geek"
    },
    {
      id: 3,
      title: "VAMO DE PAGODIN",
      album: "Vamo de Pagodin - Single",
      duration: "2:44",
      artistOrBand: "MC Daniel - DJ WN e DJ GM",
      genre: "Funk"
    },
    {
      id: 4,
      title: "Rei do gado",
      album: "Rei do gado - Single",
      duration: "2:58",
      artistOrBand: "Tião Carreiro e Pardinho",
      genre: "Moda de viola"
    }
  ];
}