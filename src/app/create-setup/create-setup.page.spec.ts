import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSetupPage } from './create-setup.page';

describe('CreateSetupPage', () => {
  let component: CreateSetupPage;
  let fixture: ComponentFixture<CreateSetupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
