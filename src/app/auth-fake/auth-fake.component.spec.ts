import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFakeComponent } from './auth-fake.component';

describe('AuthFakeComponent', () => {
  let component: AuthFakeComponent;
  let fixture: ComponentFixture<AuthFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
