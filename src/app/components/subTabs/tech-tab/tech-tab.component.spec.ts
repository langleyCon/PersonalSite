import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTabComponent } from './tech-tab.component';

describe('TechTabComponent', () => {
  let component: TechTabComponent;
  let fixture: ComponentFixture<TechTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
