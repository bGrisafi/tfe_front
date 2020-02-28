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
  orderingValue: string;
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

  onSelectChange (event: any) {
    //update the ui
    this.orderingValue = event.target.value;
    this.sortArray(this.orderingValue);
  }

  sortArray(order: string){
    switch(order){
      case "dateASC":{
        console.log("dateASC");
        this.articles.sort((val1, val2)=> {return new Date(val1.dateCreation).getTime() - new
        Date(val2.dateCreation).getTime()});
        break;
      }

      case "dateDESC":{
        console.log("dateDESC");
        this.articles.sort((val1, val2)=> {return new Date(val2.dateCreation).getTime() - new
        Date(val1.dateCreation).getTime()});
        break;
      }
      case "titleASC":{
        if (this.translate.getDefaultLang() == 'Fr'){
          this.articles.sort((val1,val2) => val1.titreFr.toLowerCase().localeCompare(val2.titreFr.toLowerCase()));
        }
         else if (this.translate.getDefaultLang() == 'En'){
          this.articles.sort((val1,val2) => val1.titreEn.toLowerCase().localeCompare(val2.titreEn.toLowerCase()));
        }
        break;
      }

      case "titleDESC":{
        if (this.translate.getDefaultLang() == 'Fr'){
          this.articles.sort((val1,val2) => val2.titreFr.toLowerCase().localeCompare(val1.titreFr.toLowerCase()));
        }
        else if (this.translate.getDefaultLang() == 'En'){
          this.articles.sort((val1,val2) => val2.titreEn.toLowerCase().localeCompare(val1.titreEn.toLowerCase()));
        }
        break;
      }
    }
  }

}
