/*
  ## AuthService Testing

  The `AuthService` is an Angular service responsible for managing user authentication.
  This testing file is used to test the functionalities of the `AuthService`.

  ### Dependencies
  - `TestBed`: A module from Angular core used for configuring and initializing the testing environment.
*/


import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
