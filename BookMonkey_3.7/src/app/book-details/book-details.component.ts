import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private bs : BookStoreService
    , private route :ActivatedRoute) {}

  ngOnInit(){
    const params = this.route.snapshot.params;
    this.book = this.bs.getSingle(params['isbn']);
  }

  getRating(num: number) {
    return new Array(num);
  }


}
