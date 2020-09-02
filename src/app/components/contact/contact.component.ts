import { Component, OnInit } from '@angular/core';
import {Page} from "../../models/page";
import {PagesService} from "../../services/pages.service";
import {TranslateService} from "@ngx-translate/core";
import {NgForm} from "@angular/forms";
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formSended: boolean;
  contact: Page;
  id = 4;

  constructor(private pagesService: PagesService, public translate: TranslateService) { this.formSended = false; }

  ngOnInit() {
    this.pagesService.getOneById(this.id).subscribe(page => {
      this.contact = page/*, console.log(this.contact)*/;
    });
  }

  onSubmit(form: NgForm){
    form.reset();
    this.formSended = true;

  }

}
