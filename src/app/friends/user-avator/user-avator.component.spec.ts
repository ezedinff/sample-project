import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatorComponent } from './user-avator.component';

describe('UserAvatorComponent', () => {
  let component: UserAvatorComponent;
  let fixture: ComponentFixture<UserAvatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAvatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAvatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
