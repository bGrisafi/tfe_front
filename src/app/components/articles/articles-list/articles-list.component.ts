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
  pagination: string;
  articles: Article[];
  constructor(private articlesService: ArticlesService, private translate: TranslateService) { }

  ngOnInit() {
    if (this.pagination === 'true') {
      this.articlesService.getArticlesPagination().subscribe(articles => {
        this.articles = articles, console.log(this.articles);
      });
    } else {
    }
  }

}
