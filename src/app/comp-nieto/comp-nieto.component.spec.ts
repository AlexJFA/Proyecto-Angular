import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNietoComponent } from './comp-nieto.component';

describe('CompNietoComponent', () => {
  let component: CompNietoComponent;
  let fixture: ComponentFixture<CompNietoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompNietoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompNietoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
