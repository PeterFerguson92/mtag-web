import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTestimonialsComponent } from './short-testimonials.component';

describe('ShortTestimonialsComponent', () => {
  let component: ShortTestimonialsComponent;
  let fixture: ComponentFixture<ShortTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
