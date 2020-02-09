import { Component, OnInit } from '@angular/core';
import {OeuvresService} from "../../../services/oeuvres.service";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";
import {Oeuvre} from "../../../models/oeuvre";
import {Artiste} from "../../../models/artiste";

@Component({
  selector: 'app-oeuvres-item',
  templateUrl: './oeuvres-item.component.html',
  styleUrls: ['./oeuvres-item.component.scss']
})
export class OeuvresItemComponent implements OnInit {

  oeuvre: Oeuvre;
  artiste: Artiste;
  id: number;
  constructor(private oeuvresService: OeuvresService, public translate: TranslateService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.oeuvresService.getOneById(this.id).subscribe(oeuvre => {this.oeuvre = oeuvre, console.log(this.oeuvre); });
    this.oeuvresService.getSubRessource(this.id,'artiste').subscribe(artiste => {this.artiste = artiste, console.log(this.artiste); })
  }

}
