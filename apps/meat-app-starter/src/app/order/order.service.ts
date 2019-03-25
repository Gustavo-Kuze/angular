import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Http, RequestOptions, Headers } from '@angular/http'
import { Order, OrderItem } from './order.model'
import { MEAT_API } from '../app.api'

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) { }

    cartItems = () => <CartItem[]>this.cartService.items

    increment = (item: CartItem) => this.cartService.increment(item)
    decrement = (item: CartItem) => this.cartService.decrement(item)
    remove = (item: CartItem) => this.cartService.removeItem(item)

    itemsValue = () => this.cartService.total()
    checkOrder = (order: any): Observable<string> => {
        const headers = new Headers()
        headers.append('Content-Type', 'applications/json')
        return this.http.post(
            `${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({ headers }))
            .map(resp => resp.json())
    }

    clear = () => this.cartService.clear()
}