import { Component, OnInit } from '@angular/core';
import { MusicsTableProps } from '../../types/musicsTableProps';
import { getMusicsService } from '../../services/getMusics.service';

@Component({
  selector: 'app-musics-table',
  templateUrl: './musics-table.component.html',
  styleUrl: './musics-table.component.css'
})

export class MusicsTableComponent implements OnInit {
  musics: Array<MusicsTableProps> = [];

  constructor(private service: getMusicsService){};

  
  ngOnInit(): void {
    this.loadMusics();
  }

  // Save the datas (musics) from the back-end to the musics array, if don`t exist the back-end, shows default values. Please, read the comment on top of the service (getMusics.service.ts)
  loadMusics() {
    this.service.getMusics().subscribe({
      next: data => this.musics = data  
    });
  }
}