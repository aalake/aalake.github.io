import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeprofileComponent } from './welcomeprofile.component';

describe('WelcomeprofileComponent', () => {
  let component: WelcomeprofileComponent;
  let fixture: ComponentFixture<WelcomeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
