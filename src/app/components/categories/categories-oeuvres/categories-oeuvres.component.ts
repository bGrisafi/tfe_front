import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {CategoriesService} from "../../../services/categories.service";
import {Categorie} from "../../../models/categorie";

@Component({
  selector: 'app-categories-oeuvres',
  templateUrl: './categories-oeuvres.component.html',
  styleUrls: ['./categories-oeuvres.component.scss']
})
export class CategoriesOeuvresComponent implements OnInit {
  id: number;
  categorie: Categorie;
  oeuvres: any[];
  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, public translate: TranslateService) {
    this.id = this.route.snapshot.params['categoryId'];
  }

  ngOnInit() {
    this.categoriesService.getOneById(this.id).subscribe(categorie => this.categorie = categorie);
    this.categoriesService.getSubRessources(this.id, 'oeuvres').subscribe(oeuvres => this.oeuvres = oeuvres);
  }

}
