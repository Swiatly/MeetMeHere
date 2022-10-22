import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageLoggedInComponent } from './welcome-page-logged-in.component';

describe('WelcomePageLoggedInComponent', () => {
  let component: WelcomePageLoggedInComponent;
  let fixture: ComponentFixture<WelcomePageLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePageLoggedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePageLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
