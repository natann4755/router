import { TestBed } from '@angular/core/testing';

import { SukiService } from './suki.service';

describe('SukiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SukiService = TestBed.get(SukiService);
    expect(service).toBeTruthy();
  });
});
