import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTrafficComponent } from './social-traffic.component';

describe('SocialTrafficComponent', () => {
  let component: SocialTrafficComponent;
  let fixture: ComponentFixture<SocialTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
