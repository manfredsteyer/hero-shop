import { Component, Input, OnChanges, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFacade } from '../data/product.facade';
import { RouterModule } from '@angular/router';
import { RecommentationsComponent } from '../recommentations/recommentations.component';
import { GhostProductsComponent } from '../ghost-products/ghost-products.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, RecommentationsComponent, GhostProductsComponent, ReactiveFormsModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges {
  facade = inject(ProductFacade);
  groups = this.facade.groups;
  product = this.facade.selectedProduct;
  showDetails = true;

  formControl = new FormControl<number>(1);

  @Input() id = '';

  constructor() {
    this.formControl.events.subscribe(e => {
      console.log('e', e);
    });
  }

  ngOnChanges(): void {
    this.facade.loadProduct(+this.id)
  }

  addToBasket() {
    console.log('not implemented in this demo!');
  }

}
