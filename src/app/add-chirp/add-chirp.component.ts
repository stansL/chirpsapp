import {Component, OnInit} from '@angular/core';
import {ChirpService} from "../chirp.service";
import {Chirp} from "../chirp";

@Component({
  selector: 'app-add-chirp',
  templateUrl: './add-chirp.component.html',
  styleUrls: ['./add-chirp.component.css']
})
export class AddChirpComponent implements OnInit {
  // @ts-ignore
  chirp: Chirp = {
    created_by: '',
    text: ''
  };

  constructor(private chirpService: ChirpService) {
  }

  ngOnInit() {
  }

  addChirp() {
    this.chirp.created_at = new Date();
    this.chirpService.addChirp(this.chirp);
    // @ts-ignore
    this.chirp = {
      created_by: '',
      text: ''
    };
  }

}
