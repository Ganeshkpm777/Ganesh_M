import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSuccessComponent } from './search-success.component';

describe('SearchSuccessComponent', () => {
  let component: SearchSuccessComponent;
  let fixture: ComponentFixture<SearchSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
