import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSocialComponent } from './events-social.component';

describe('EventsSocialComponent', () => {
  let component: EventsSocialComponent;
  let fixture: ComponentFixture<EventsSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
