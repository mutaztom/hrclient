import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqmedicalComponent } from './reqmedical.component';

describe('ReqmedicalComponent', () => {
  let component: ReqmedicalComponent;
  let fixture: ComponentFixture<ReqmedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqmedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqmedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
