import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstuddataComponent } from './showstuddata.component';

describe('ShowstuddataComponent', () => {
  let component: ShowstuddataComponent;
  let fixture: ComponentFixture<ShowstuddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowstuddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstuddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
