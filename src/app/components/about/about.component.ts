import { Component, OnInit } from '@angular/core';
import {PagesService} from "../../services/pages.service";
import {TranslateService} from "@ngx-translate/core";
import {Page} from "../../models/page";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private pagesService: PagesService, public translate: TranslateService) {

  }
  about: Page;
  id = 3;
  ngOnInit() {
    this.pagesService.getOneById(this.id).subscribe(page => {
      this.about = page/*, console.log(this.about)*/;
    });
  }

}
