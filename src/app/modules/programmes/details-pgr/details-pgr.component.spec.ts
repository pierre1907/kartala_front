import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPgrComponent } from './details-pgr.component';

describe('DetailsPgrComponent', () => {
  let component: DetailsPgrComponent;
  let fixture: ComponentFixture<DetailsPgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsPgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
