import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    constructor(private notificationService: NotificationService) { }

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increment(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total = () => <number>(
        this.items
            .map(item => item.value())
            .reduce((prev, next) => prev + next, 0)
    )

    increment = (item: CartItem) => item.quantity += 1

    decrement = (item: CartItem) => {
        item.quantity -= 1
        if (item.quantity === 0) this.removeItem(item)
    }
}