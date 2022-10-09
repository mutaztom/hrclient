import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqmissionComponent } from './reqmission.component';

describe('ReqmissionComponent', () => {
  let component: ReqmissionComponent;
  let fixture: ComponentFixture<ReqmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
