import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanbanComponent } from './canban.component';

describe('CanbanComponent', () => {
  let component: CanbanComponent;
  let fixture: ComponentFixture<CanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
