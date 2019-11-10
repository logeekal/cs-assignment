import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHandlerComponent } from './chart-handler.component';

describe('ChartHandlerComponent', () => {
  let component: ChartHandlerComponent;
  let fixture: ComponentFixture<ChartHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
