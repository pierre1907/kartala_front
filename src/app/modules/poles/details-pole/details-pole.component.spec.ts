import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPoleComponent } from './details-pole.component';

describe('DetailsPoleComponent', () => {
  let component: DetailsPoleComponent;
  let fixture: ComponentFixture<DetailsPoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
