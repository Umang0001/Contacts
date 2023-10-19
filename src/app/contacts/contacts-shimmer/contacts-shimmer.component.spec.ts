import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsShimmerComponent } from './contacts-shimmer.component';

describe('ContactsShimmerComponent', () => {
  let component: ContactsShimmerComponent;
  let fixture: ComponentFixture<ContactsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsShimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
