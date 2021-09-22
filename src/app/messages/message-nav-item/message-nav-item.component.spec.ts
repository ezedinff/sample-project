import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNavItemComponent } from './message-nav-item.component';

describe('MessageNavItemComponent', () => {
  let component: MessageNavItemComponent;
  let fixture: ComponentFixture<MessageNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageNavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
