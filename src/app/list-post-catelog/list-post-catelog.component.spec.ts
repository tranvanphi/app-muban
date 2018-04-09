import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostCatelogComponent } from './list-post-catelog.component';

describe('ListPostCatelogComponent', () => {
  let component: ListPostCatelogComponent;
  let fixture: ComponentFixture<ListPostCatelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostCatelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostCatelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
