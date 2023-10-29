import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommentationsComponent } from './recommentations.component';

describe('RecommentationsComponent', () => {
  let component: RecommentationsComponent;
  let fixture: ComponentFixture<RecommentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommentationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
