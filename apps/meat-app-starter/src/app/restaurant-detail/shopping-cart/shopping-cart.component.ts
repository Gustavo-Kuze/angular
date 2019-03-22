import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }


  addItem = (item: any) => this.shoppingCartService.addItem(item)

  removeItem = (item: any) => this.shoppingCartService.removeItem(item)

  clear = () => this.shoppingCartService.clear()

  items = () => <any[]>this.shoppingCartService.items

  total = () => <number>this.shoppingCartService.total()

}
