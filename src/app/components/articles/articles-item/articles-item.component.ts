import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../../../services/articles.service';
import {TranslateService} from '@ngx-translate/core';
import {Article} from '../../../models/article';
import {ActivatedRoute, Router} from '@angular/router';
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-articles-item',
  templateUrl: './articles-item.component.html',
  styleUrls: ['./articles-item.component.scss']
})
export class ArticlesItemComponent implements OnInit {
  article: Article;
  id: number;
  constructor(private articlesService: ArticlesService, public translate: TranslateService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.articlesService.getOneById(this.id).subscribe(article => {this.article = article/*, console.log(this.article)*/;},
    error => { this.router.navigate(['/404']);
    });
  }

}
