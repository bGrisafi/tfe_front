import { Component, OnInit } from '@angular/core';
import {ExpositionsService} from "../../../services/expositions.service";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";
import {Exposition} from "../../../models/exposition";
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-expositions-item',
  templateUrl: './expositions-item.component.html',
  styleUrls: ['./expositions-item.component.scss']
})
export class ExpositionsItemComponent implements OnInit {

  id: number;
  exposition: Exposition;
  constructor(private expositionsService: ExpositionsService, public translate: TranslateService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.expositionsService.getOneById(this.id).subscribe(
      exposition => {this.exposition = exposition, console.log(this.exposition);
    });
  }

}
