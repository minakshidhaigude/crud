import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestuddataComponent } from './updatestuddata.component';

describe('UpdatestuddataComponent', () => {
  let component: UpdatestuddataComponent;
  let fixture: ComponentFixture<UpdatestuddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestuddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestuddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
