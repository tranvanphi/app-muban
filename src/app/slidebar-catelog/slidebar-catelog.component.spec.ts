import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarCatelogComponent } from './slidebar-catelog.component';

describe('SlidebarCatelogComponent', () => {
  let component: SlidebarCatelogComponent;
  let fixture: ComponentFixture<SlidebarCatelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidebarCatelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidebarCatelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
