import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNavComponent } from './message-nav.component';

describe('MessageNavComponent', () => {
  let component: MessageNavComponent;
  let fixture: ComponentFixture<MessageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
