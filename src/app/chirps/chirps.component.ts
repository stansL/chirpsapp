import {Component, OnInit} from '@angular/core';
import {ChirpService} from "../chirp.service";
import {Chirp} from "../chirp";

@Component({
  selector: 'app-chirps',
  templateUrl: './chirps.component.html',
  styleUrls: ['./chirps.component.css']
})
export class ChirpsComponent implements OnInit {
  chirps: Chirp[];

  constructor(private chirpService: ChirpService) {
  }

  ngOnInit() {
    this.loadChirps();
  }

  loadChirps(): void {
    this.chirpService.getChirps().subscribe(chirps => {
      this.chirps = chirps;
    });

  }
}
