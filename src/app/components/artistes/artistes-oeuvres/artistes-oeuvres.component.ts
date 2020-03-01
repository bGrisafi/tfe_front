import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Artiste} from "../../../models/artiste";
import {ArtistesService} from "../../../services/artistes.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-artistes-oeuvres',
  templateUrl: './artistes-oeuvres.component.html',
  styleUrls: ['./artistes-oeuvres.component.scss']
})
export class ArtistesOeuvresComponent implements OnInit {
  id: number;
  artiste: Artiste;
  oeuvres: any[];
  constructor(private route: ActivatedRoute, private artistesService: ArtistesService, public translate: TranslateService) {
    this.id = this.route.snapshot.params['artistId'];
  }

  ngOnInit() {
    this.artistesService.getOneById(this.id).subscribe(artiste => this.artiste = artiste);
    this.artistesService.getSubRessources(this.id, 'oeuvres').subscribe(oeuvres => this.oeuvres = oeuvres);
  }

}
