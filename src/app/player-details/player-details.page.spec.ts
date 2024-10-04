import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerDetailsPage } from './player-details.page';

describe('PlayerDetailsPage', () => {
  let component: PlayerDetailsPage;
  let fixture: ComponentFixture<PlayerDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
