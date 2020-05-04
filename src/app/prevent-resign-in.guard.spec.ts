import { TestBed, async, inject } from '@angular/core/testing';

import { PreventResignInGuard } from './prevent-resign-in.guard';

describe('PreventResignInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventResignInGuard]
    });
  });

  it('should ...', inject([PreventResignInGuard], (guard: PreventResignInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
