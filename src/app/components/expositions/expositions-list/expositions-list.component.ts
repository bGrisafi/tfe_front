import { Component, OnInit } from '@angular/core';
import {Exposition} from "../../../models/exposition";
import {ExpositionsService} from "../../../services/expositions.service";
import {TranslateService} from "@ngx-translate/core";
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-expositions-list',
  templateUrl: './expositions-list.component.html',
  styleUrls: ['./expositions-list.component.scss']
})
export class ExpositionsListComponent implements OnInit {
  expositions: Exposition[];
  p: number = 1;
  constructor(private expositionsService: ExpositionsService, public translate: TranslateService) { }

  ngOnInit() {
    this.expositionsService.getAll().subscribe(expositions => {
      this.expositions = expositions, console.log(this.expositions)
    });
  }

}
