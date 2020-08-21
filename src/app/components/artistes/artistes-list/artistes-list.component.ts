import { Component, OnInit } from '@angular/core';
import {ArtistesService} from "../../../services/artistes.service";
import {TranslateService} from "@ngx-translate/core";
import {Artiste} from "../../../models/artiste";
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-artistes-list',
  templateUrl: './artistes-list.component.html',
  styleUrls: ['./artistes-list.component.scss']
})
export class ArtistesListComponent implements OnInit {

  artistes: Artiste[];
  p: number = 1;

  constructor(private artistesService: ArtistesService, public translate: TranslateService) { }

  ngOnInit() {
    this.artistesService.getAll().subscribe(artistes => {
      this.artistes = artistes, console.log(this.artistes)
    });
  }

}
