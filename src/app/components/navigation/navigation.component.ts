import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Page} from '../../models/page';
import {PagesService} from '../../services/pages.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private pagesService: PagesService, @Inject(LOCALE_ID) protected localeId: string) {
  }

  pages: Page[];

  ngOnInit(): void {
    this.pagesService.getAll().subscribe(pages => {
      this.pages = pages, console.log(this.pages);
    });
  }
}
