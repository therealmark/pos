import React, {Component} from 'react';
import InventoryService from '../api/InventoryService';
import ItemList from './ItemList';

export default class Basket extends Component {

    constructor() {
        super();
        let inventoryService = new InventoryService();
        this.state = {
            items: [],
            currentInventory: inventoryService.getInventory()
        };

        this.state.currentInventory.forEach(item => {
            if (item.inStock > 1) {
                this.state.items.push(item); // Front-load the basket for testing purposes.
            }
        });


    }

    render() {
        return (
            <div>
                <h1>Basket</h1>
                <ItemList items={this.state.items}/>
            </div>
        )
    }
}