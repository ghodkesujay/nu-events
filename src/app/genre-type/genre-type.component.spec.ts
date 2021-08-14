import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreTypeComponent } from './genre-type.component';

describe('GenreTypeComponent', () => {
  let component: GenreTypeComponent;
  let fixture: ComponentFixture<GenreTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
