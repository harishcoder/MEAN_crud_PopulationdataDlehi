import { TestBed, inject } from '@angular/core/testing';

import { PopulationdataService } from './populationdata.service';

describe('PopulationdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulationdataService]
    });
  });

  it('should be created', inject([PopulationdataService], (service: PopulationdataService) => {
    expect(service).toBeTruthy();
  }));
});
