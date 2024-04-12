import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUsuarioNormalComponent } from './menu-usuario-normal.component';

describe('MenuUsuarioNormalComponent', () => {
  let component: MenuUsuarioNormalComponent;
  let fixture: ComponentFixture<MenuUsuarioNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuUsuarioNormalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuUsuarioNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
