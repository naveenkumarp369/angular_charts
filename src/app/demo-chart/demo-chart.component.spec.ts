import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChartComponent } from './demo-chart.component';

describe('DemoChartComponent', () => {
  let component: DemoChartComponent;
  let fixture: ComponentFixture<DemoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
