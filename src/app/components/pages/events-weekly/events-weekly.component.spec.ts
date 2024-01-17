import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsWeeklyComponent } from './events-weekly.component';

describe('EventsWeeklyComponent', () => {
  let component: EventsWeeklyComponent;
  let fixture: ComponentFixture<EventsWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsWeeklyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
