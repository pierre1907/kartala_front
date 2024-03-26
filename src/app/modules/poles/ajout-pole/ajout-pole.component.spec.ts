import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPoleComponent } from './ajout-pole.component';

describe('AjoutPoleComponent', () => {
  let component: AjoutPoleComponent;
  let fixture: ComponentFixture<AjoutPoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutPoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
