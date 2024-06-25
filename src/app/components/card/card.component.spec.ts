import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCard } from './card.component';

describe('LeftCard', () => {
  let component: LeftCard;
  let fixture: ComponentFixture<LeftCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
