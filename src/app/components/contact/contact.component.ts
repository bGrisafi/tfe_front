import { Component, OnInit } from '@angular/core';
import {Page} from "../../models/page";
import {PagesService} from "../../services/pages.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private pagesService: PagesService, public translate: TranslateService) { }

  contact: Page;
  id = 4;
  ngOnInit() {
    this.pagesService.getOneById(this.id).subscribe(page => {
      this.contact = page, console.log(this.contact);
    });
  }

}
