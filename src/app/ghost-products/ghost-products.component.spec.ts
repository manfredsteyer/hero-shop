import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostProductsComponent } from './ghost-products.component';

describe('GhostProductsComponent', () => {
  let component: GhostProductsComponent;
  let fixture: ComponentFixture<GhostProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GhostProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GhostProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
