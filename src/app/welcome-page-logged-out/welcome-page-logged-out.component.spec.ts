import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageLoggedOutComponent } from './welcome-page-logged-out.component';

describe('WelcomePageLoggedOutComponent', () => {
  let component: WelcomePageLoggedOutComponent;
  let fixture: ComponentFixture<WelcomePageLoggedOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePageLoggedOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePageLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
