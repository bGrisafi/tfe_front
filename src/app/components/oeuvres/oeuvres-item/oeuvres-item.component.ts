import { Component, OnInit } from '@angular/core';
import {OeuvresService} from "../../../services/oeuvres.service";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Oeuvre} from "../../../models/oeuvre";
import {Artiste} from "../../../models/artiste";
import {Categorie} from "../../../models/categorie";

@Component({
  selector: 'app-oeuvres-item',
  templateUrl: './oeuvres-item.component.html',
  styleUrls: ['./oeuvres-item.component.scss']
})
export class OeuvresItemComponent implements OnInit {

  oeuvre: Oeuvre;
  artiste: any;
  categorie: any;
  id: number;
  constructor(private oeuvresService: OeuvresService, public translate: TranslateService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.oeuvresService.getOneById(this.id).subscribe(
      oeuvre => {this.oeuvre = oeuvre, console.log(this.oeuvre);},
      error => {this.router.navigate(['/404']);
      });

    this.oeuvresService.getSubRessource(this.id,'artiste').subscribe(artiste => {this.artiste = artiste, console.log(this.artiste); })
    this.oeuvresService.getSubRessource(this.id,'categorie').subscribe(categorie => {this.categorie = categorie, console.log(this.categorie); })
  }

}
