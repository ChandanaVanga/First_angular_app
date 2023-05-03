import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  @HostBinding('attr.class') cssClass = 'row';
article: any;
// article: Article;
// articles: Article[];


  constructor() {

//Starting

    // this.title= 'Angular';
    // this.link= 'http://angular.io';
    // this.votes = 10;

//next    
    // this.article = new Article(
    //    'Angular',
    //    'http://angular.io',
    //    10);

//after that


//finally
// this.articles = [
//    new Article('Angular', 'http://angular.io', 3),
//    new Article('Fullstack', 'http://fullstack.io', 2),
//    new Article('Angular Homepage', 'http://angular.io', 1),
//    ];
  }
  // voteUp(): boolean {
  //   this.votes +=1;
  //   return false;
  // }
  voteUp(): boolean {
    this.article.voteUp()
    return false;
  }
  // voteDown(): boolean {
  //   this.votes -=1
  //   return false;
  // }
  voteDown(): boolean {
    this.article.voteDown()
    return false;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}


