import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListCompareComponent } from './poke-list-compare.component';

describe('PokeListCompareComponent', () => {
  let component: PokeListCompareComponent;
  let fixture: ComponentFixture<PokeListCompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeListCompareComponent]
    });
    fixture = TestBed.createComponent(PokeListCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
