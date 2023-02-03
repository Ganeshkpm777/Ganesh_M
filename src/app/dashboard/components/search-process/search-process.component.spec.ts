import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProcessComponent } from './search-process.component';

describe('SearchProcessComponent', () => {
  let component: SearchProcessComponent;
  let fixture: ComponentFixture<SearchProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
