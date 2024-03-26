import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePoleComponent } from './liste-pole.component';

describe('ListePoleComponent', () => {
  let component: ListePoleComponent;
  let fixture: ComponentFixture<ListePoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListePoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
