import { Component, HOST_TAG_NAME, Input, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFacade } from '../data/product.facade';
import { RouterModule } from '@angular/router';

export type RecommentationsMode = 'full' | 'small' | 'minimal'; 

@Component({
  selector: 'app-recommentations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recommentations.component.html',
  styleUrls: ['./recommentations.component.css']
})
export class RecommentationsComponent implements OnChanges {
  facade = inject(ProductFacade);
  
  @Input({ required: true }) productGroup = '';
  @Input() mode: RecommentationsMode = 'small';

  otherProductsInGroup = this.facade.otherProductsInGroup;
  host = inject(HOST_TAG_NAME);

  constructor() {
    console.log('HOST_TAG_NAME', this.host);
  }

  ngOnChanges(): void {
    console.log('productGroup', this.productGroup)
    this.facade.setSelectedGroup(this.productGroup);
    this.facade.loadProducts();
  }

}
