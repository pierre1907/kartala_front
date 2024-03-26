import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePgrComponent } from './liste-pgr.component';

describe('ListePgrComponent', () => {
  let component: ListePgrComponent;
  let fixture: ComponentFixture<ListePgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListePgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
