import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsShimmerComponent } from './profile-details-shimmer.component';

describe('ProfileDetailsShimmerComponent', () => {
  let component: ProfileDetailsShimmerComponent;
  let fixture: ComponentFixture<ProfileDetailsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsShimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDetailsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
