import { TestBed } from '@angular/core/testing';

import { HackerNews } from './hackernews.service';

describe('Hackernews.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HackerNews = TestBed.inject(HackerNews);
    expect(service).toBeTruthy();
  });
});
