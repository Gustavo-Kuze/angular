import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http'
import { Order, OrderItem } from './order.model'
import { MEAT_API } from '../app.api'

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: HttpClient) { }

    cartItems = () => <CartItem[]>this.cartService.items

    increment = (item: CartItem) => this.cartService.increment(item)
    decrement = (item: CartItem) => this.cartService.decrement(item)
    remove = (item: CartItem) => this.cartService.removeItem(item)

    itemsValue = () => this.cartService.total()
    checkOrder = (order: Order): Observable<string> => {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .map(order => order.id)
    }

    clear = () => this.cartService.clear()
}