import { TestBed } from '@angular/core/testing';

import { LoinGateServService } from './loin-gate-serv.service';

describe('LoinGateServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoinGateServService = TestBed.get(LoinGateServService);
    expect(service).toBeTruthy();
  });
});
