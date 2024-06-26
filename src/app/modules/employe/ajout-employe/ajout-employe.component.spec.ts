import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEmployeComponent } from './ajout-employe.component';

describe('AjoutEmployeComponent', () => {
  let component: AjoutEmployeComponent;
  let fixture: ComponentFixture<AjoutEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutEmployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
