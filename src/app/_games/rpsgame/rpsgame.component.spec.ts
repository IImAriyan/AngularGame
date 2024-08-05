import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPSgameComponent } from './rpsgame.component';

describe('RPSgameComponent', () => {
  let component: RPSgameComponent;
  let fixture: ComponentFixture<RPSgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RPSgameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RPSgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
