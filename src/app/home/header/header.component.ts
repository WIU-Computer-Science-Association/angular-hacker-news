import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  paramSub:   Subscription;
  activeLink: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramSub = this.route.params.subscribe(
      (value: Params) => {
        this.activeLink = value['timeline']
      }
    );
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

  isActive(linkParam: string) {
    return linkParam === this.activeLink;
  }

}
