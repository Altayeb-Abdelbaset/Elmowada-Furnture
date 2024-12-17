import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofoloComponent } from './portofolo.component';

describe('PortofoloComponent', () => {
  let component: PortofoloComponent;
  let fixture: ComponentFixture<PortofoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofoloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
