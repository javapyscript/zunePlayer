import { TestBed } from '@angular/core/testing';

import { TracksDataService } from './tracks-data.service';

describe('TracksDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TracksDataService = TestBed.get(TracksDataService);
    expect(service).toBeTruthy();
  });
});
