import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectLcdPage } from './connect-lcd.page';

describe('ConnectLcdPage', () => {
  let component: ConnectLcdPage;
  let fixture: ComponentFixture<ConnectLcdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectLcdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
