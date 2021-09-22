import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBodyOutgoingComponent } from './message-body-outgoing.component';

describe('MessageBodyOutgoingComponent', () => {
  let component: MessageBodyOutgoingComponent;
  let fixture: ComponentFixture<MessageBodyOutgoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBodyOutgoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBodyOutgoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
