import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPgrComponent } from './ajout-pgr.component';

describe('AjoutPgrComponent', () => {
  let component: AjoutPgrComponent;
  let fixture: ComponentFixture<AjoutPgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutPgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutPgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
