import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPageComponent } from './listings-page/listings-page.component';

describe('ListingsPageComponent', () => {
  let component: ListingsPageComponent;
  let fixture: ComponentFixture<ListingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
