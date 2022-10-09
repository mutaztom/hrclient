import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqloanComponent } from './reqloan.component';

describe('ReqloanComponent', () => {
  let component: ReqloanComponent;
  let fixture: ComponentFixture<ReqloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
