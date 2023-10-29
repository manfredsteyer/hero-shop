import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFacade } from '../data/product.facade';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  router = inject(Router);
  facade = inject(ProductFacade);

  groups = this.facade.groups;
  products = this.facade.products;
  selectedGroup = this.facade.selectedGroup;

  @Input() filter = '';

  async ngOnInit(): Promise<void> {
    this.facade.clearProduct();
    this.facade.setSelectedGroup(this.filter);
    await this.facade.loadProducts();
  }

  async groupSelected(group: string): Promise<void> {
    this.facade.setSelectedGroup(group);
    this.router.navigate(['.', { filter: group }]);
    await this.facade.loadProducts();
  }
  
}
