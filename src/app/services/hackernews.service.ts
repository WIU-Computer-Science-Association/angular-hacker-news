import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface HackerNewsItem {
  by: string,
  descendants: number,
  id: number,
  kids: number[],
  score: number,
  text: string,
  time: number,
  title: string,
  type: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class HackerNews {
  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  getTimeline(timelineType: string) {
    return this.http.get<number[]>(this.baseUrl + '/' + timelineType + '.json', this.getHttpHeaders());
  }

  getItem(id: number) {
    return this.http.get<HackerNewsItem>(this.baseUrl + '/item/' + id + '.json', this.getHttpHeaders());
  }


  private getHttpHeaders(): {headers: HttpHeaders} {
    return  {
      headers: new HttpHeaders({
        
      })
    }
  }
}
