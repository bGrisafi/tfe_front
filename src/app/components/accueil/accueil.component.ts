import {Component, OnInit} from '@angular/core';
import {ExpositionsService} from "../../services/expositions.service";
import {Exposition} from "../../models/exposition";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})

export class AccueilComponent implements OnInit {
  expoEnCours: boolean;
  expositions: Exposition[];
  exposition: Exposition;
  constructor(private expositionsService: ExpositionsService, private translate: TranslateService) {this.expoEnCours = false;}

  ngOnInit() {
    this.expositionsService.getAll().subscribe(expositions => {
      this.expositions = expositions, this.checkExpositions(new Date());
    });
  }

  checkExpositions(currentDate): void {
    for(var i = 0; i < this.expositions.length; i++){
      if(currentDate >= new Date(this.expositions[i].dateDebut) && currentDate <= new Date(this.expositions[i].dateFin)){
        this.expoEnCours = true;
        this.exposition = this.expositions[i];
      }
    }
  }
}


