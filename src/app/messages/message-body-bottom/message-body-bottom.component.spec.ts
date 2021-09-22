import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBodyBottomComponent } from './message-body-bottom.component';

describe('MessageBodyBottomComponent', () => {
  let component: MessageBodyBottomComponent;
  let fixture: ComponentFixture<MessageBodyBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBodyBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBodyBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
