import {Component, OnInit} from '@angular/core';
import {Page} from '../../models/page';
import {PagesService} from '../../services/pages.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private pagesService: PagesService, public translate: TranslateService) {
  }

  pages: Page[];
  ngOnInit(): void {
    this.pagesService.getAll().subscribe(pages => {
      this.pages = pages, console.log(this.pages);
    });
  }
  onChangeLang(language: string) {
    console.log('dans le change');
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }
}
