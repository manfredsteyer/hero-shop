import { Injectable } from '@angular/core';
import { Product, productGroups, products } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  async findGroups(): Promise<string[]> {
    return Promise.resolve(productGroups);
  }

  async findProductsByGroup(group: string): Promise<Product[]> {
    return Promise.resolve(products.filter(p => p.productGroup === group));
  }

  async findProducts(): Promise<Product[]> {
    return Promise.resolve(products);
  }

  async findProductById(productId: number): Promise<Product | undefined> {
    return Promise.resolve(products.find(p => p.id === productId));
  }
  

}
