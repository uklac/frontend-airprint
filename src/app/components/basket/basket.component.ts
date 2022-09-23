import { Component, Input, OnInit } from '@angular/core';

interface Product {
  url: string,
  size: string,
  amount: number,
  price: number
}

interface AmountProducts {
  value: number;
  amount: number;
}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit {

  @Input() products: Array<Product> = [];
  @Input() amounts: Array<AmountProducts> = [];

  basketProducts: Array<Product> = [];
  amountProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  subtotal = 0;
  shipping = 8;
  total = 0;

  constructor() { }

  ngOnInit(): void {
    this.basketProducts = this.products;
    this.subtotal = this.getSubTotal();
    this.total = this.getTotal();
  }

  getSubTotal() {
    let subtotal = 0;
    this.basketProducts.forEach((product) => {
      const subtotalProduct = product.amount * product.price;
      subtotal = subtotalProduct + subtotal;
      return subtotal;
    });
    return subtotal;
  }

  amountChanged(event: any, index: number) {
    const { value } = event;
    this.basketProducts[index].amount = value;
    this.setSubtotalAndTotal();
  }

  getTotal() {
    return this.shipping + this.getSubTotal();
  }

  setSubtotalAndTotal() {
    this.subtotal = this.getSubTotal();
    this.total = this.getTotal();
  }

  remove(product: Product) {
    this.basketProducts.splice(this.basketProducts.indexOf(product), 1);
    this.setSubtotalAndTotal();
  }

}
