import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHijoComponent } from './comp-hijo.component';

describe('CompHijoComponent', () => {
  let component: CompHijoComponent;
  let fixture: ComponentFixture<CompHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
