import { Component, OnInit, Input } from '@angular/core';
import { HackerNews, HackerNewsItem } from 'src/app/services/hackernews.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input('itemId') itemId: number;
  item: HackerNewsItem;
  itemSub: Subscription;

  constructor(private hackerNews: HackerNews) { }

  ngOnInit() {
    this.itemSub = this.hackerNews.getItem(this.itemId).subscribe(
      (response: HackerNewsItem) => {
        this.item = response;
      }
    );
  }

}
