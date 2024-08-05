import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChicasPage } from './chicas.page';

describe('ChicasPage', () => {
  let component: ChicasPage;
  let fixture: ComponentFixture<ChicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
