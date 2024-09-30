import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderNotFoundComponent } from './loader-not-found.component';

describe('LoaderNotFoundComponent', () => {
  let component: LoaderNotFoundComponent;
  let fixture: ComponentFixture<LoaderNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoaderNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
