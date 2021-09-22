import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBodyIcommingComponent } from './message-body-icomming.component';

describe('MessageBodyIcommingComponent', () => {
  let component: MessageBodyIcommingComponent;
  let fixture: ComponentFixture<MessageBodyIcommingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBodyIcommingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBodyIcommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
