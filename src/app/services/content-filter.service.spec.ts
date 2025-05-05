import { TestBed } from '@angular/core/testing';

import { ContentFilterService } from './content-filter.service';

describe('ContentFilterService', () => {
  let service: ContentFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
