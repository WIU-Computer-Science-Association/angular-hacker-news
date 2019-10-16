import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HackerNews } from 'src/app/services/hackernews.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, OnDestroy {

  paramSub: Subscription;
  timeline: string;
  items:    number[];

  constructor(private route: ActivatedRoute, private hackernews: HackerNews) { }

  ngOnInit() {
    this.paramSub = this.route.params.subscribe(
      (value: Params) => {
        this.timeline = value['timeline'];
        this.loadItems();
      }
    )
  }

  loadItems() {
    this.hackernews.getTimeline(this.timeline).subscribe(
      (response: number[]) => {
        this.items = response;
      }
    );
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

}
