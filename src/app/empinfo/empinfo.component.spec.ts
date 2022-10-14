import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpinfoComponent } from './empinfo.component';

describe('EmpinfoComponent', () => {
  let component: EmpinfoComponent;
  let fixture: ComponentFixture<EmpinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
