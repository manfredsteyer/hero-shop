import { Injectable, computed, inject, signal } from '@angular/core';
import { Product, initialProduct } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {

  private productService = inject(ProductService);

  private state = signal({
    groups: [] as string[],
    selectedGroup: '',
    products: [] as Product[],
    selectedProduct: initialProduct
  });

  readonly groups = computed(() => this.state().groups);
  readonly products = computed(() => this.state().products);
  readonly selectedProduct = computed(() => this.state().selectedProduct);
  readonly selectedGroup = computed(() => this.state().selectedGroup);
  readonly otherProductsInGroup = computed(() => this.state().products.filter(p => p.id !== this.state().selectedProduct.id));

  constructor() {
    this.loadGroups();
  }

  async loadGroups(): Promise<void> {
    const groups = await this.productService.findGroups();
    this.state.update(state => ({ ...state, groups }));
  }

  setSelectedGroup(selectedGroup: string): void {
    this.state.update(state => ({ ...state, selectedGroup }));
  }

  clearProduct(): void {
    this.state.update(state => ({ ...state, selectedProduct: initialProduct }))
  }

  async loadProduct(productId: number): Promise<void> {
    const selectedProduct =
      await this.productService.findProductById(productId) || initialProduct

    this.state.update(state => ({ ...state, selectedProduct }));
  }

  async loadProducts(): Promise<void> {
    const group = this.selectedGroup();
    const products = (group && group !== 'All') ?
      await this.productService.findProductsByGroup(group)
      : await this.productService.findProducts();


    this.state.update(state => ({
      ...state,
      products,
      selectedGroup: group,
      selectedProductId: 0
    }));
  }

}
