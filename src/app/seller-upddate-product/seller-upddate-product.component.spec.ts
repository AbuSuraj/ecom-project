import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUpddateProductComponent } from './seller-upddate-product.component';

describe('SellerUpddateProductComponent', () => {
  let component: SellerUpddateProductComponent;
  let fixture: ComponentFixture<SellerUpddateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerUpddateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerUpddateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
