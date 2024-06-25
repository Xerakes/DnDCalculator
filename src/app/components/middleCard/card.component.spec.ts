import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleCard } from './card.component';

describe('MiddleCard', () => {
  let component: MiddleCard;
  let fixture: ComponentFixture<MiddleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
