import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstatusComponent } from './ver-estatus.component';

describe('VerEstatusComponent', () => {
  let component: VerEstatusComponent;
  let fixture: ComponentFixture<VerEstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerEstatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerEstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
