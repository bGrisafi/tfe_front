import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AddComment} from "../../../models/add-comment";
import {CommentairesService} from "../../../services/commentaires.service";
import {formatDate} from "@angular/common";
import {Commentaire} from "../../../models/commentaire";
import {ArticlesService} from "../../../services/articles.service";

@Component({
  selector: 'app-commentaires-list',
  templateUrl: './commentaires-list.component.html',
  styleUrls: ['./commentaires-list.component.scss']
})
export class CommentairesListComponent implements OnInit {

  @Input() articleId: number;

  addComment: AddComment;
  commentSended: boolean = false;
  commentaires : any;
  articleRoute: string = "/api/articles/";

  constructor(private commentairesService: CommentairesService, private articlesService: ArticlesService) {  }

  ngOnInit() {
    this.articlesService.getSubRessources(this.articleId, 'commentaires').subscribe(commentaires => {
      this.commentaires = commentaires, console.log(this.commentaires);
    });

  }


  onSubmit(form: NgForm){

    this.articleRoute = this.articleRoute + this.articleId;
    this.addComment = {
      email : form.value['commentEmail'],
      commentaire: form.value['commentContent'],
      article: this.articleRoute,
      nom : form.value['commentName']
    };

    //send of the comment in DB
    this.commentairesService.addOne(this.addComment).subscribe(
      //If all good -> commentSended true
      commentaire => {commentaire.dateAjout = new Date(), this.commentaires.push(commentaire),
        this.commentSended = true,
        this.sortComments();
      },
      error => console.log(error));

  }
  private sortComments(){

    this.commentaires.sort((val1, val2)=> {return new Date(val2.dateAjout).getTime() - new
    Date(val1.dateAjout).getTime()});
  }

}
