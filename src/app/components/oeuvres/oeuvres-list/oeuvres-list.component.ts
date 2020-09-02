import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {OeuvresService} from "../../../services/oeuvres.service";
import {Oeuvre} from "../../../models/oeuvre";
import {UntilDestroy} from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-oeuvres-list',
  templateUrl: './oeuvres-list.component.html',
  styleUrls: ['./oeuvres-list.component.scss']
})
export class OeuvresListComponent implements OnInit {
  @Input()
  pagination: string = 'false';
  oeuvres: Oeuvre[];
  p: number = 1;
  constructor(private oevresService: OeuvresService, public translate: TranslateService) {

  }

  ngOnInit() {
    if (this.pagination === 'true') {
      setTimeout(() => {
        this.oevresService.getPages(1)
          .subscribe(oeuvres => {
          this.oeuvres = oeuvres/*, console.log(this.oeuvres)*/;
        });
     },1000);

    } else {
      this.oevresService.getAll().subscribe(oeuvres => {
        this.oeuvres = oeuvres/*, console.log(this.oeuvres)*/;
      });
    }
  }


}
