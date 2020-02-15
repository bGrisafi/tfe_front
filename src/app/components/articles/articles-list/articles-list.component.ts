import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../models/article';
import {ArticlesService} from '../../../services/articles.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})

export class ArticlesListComponent implements OnInit {
  @Input()
  pagination: string = 'false';
  articles: Article[];
  p: number = 1;
  constructor(private articlesService: ArticlesService, public translate: TranslateService) { }

  ngOnInit() {
    if (this.pagination === 'true') {
      this.articlesService.getPages(1).subscribe(articles => {
        this.articles = articles, console.log(this.articles);
      });
    } else {
      this.articlesService.getAll().subscribe(articles => {
        this.articles = articles, console.log(this.articles);
      });
    }
  }

}
