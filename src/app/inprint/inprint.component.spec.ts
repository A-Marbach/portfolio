import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprintComponent } from './inprint.component';

describe('InprintComponent', () => {
  let component: InprintComponent;
  let fixture: ComponentFixture<InprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InprintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
