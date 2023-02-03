import { TestBed } from '@angular/core/testing';

import { ServicemangerService } from './servicemanger.service';

describe('ServicemangerService', () => {
  let service: ServicemangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
