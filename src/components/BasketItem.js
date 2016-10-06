import React, { Component } from 'react';
import InventoryService from '../api/InventoryService';

export default class BasketItem extends Component {


    render() {

        let inventoryService = new InventoryService();

        return (
            <tr key={this.props.item.sku}>
                <td>{this.props.item.size} {this.props.uom}</td>
                <td>{this.props.item.name}</td>
                <td><input type="number" defaultValue="1" min="1" max={inventoryService.getStockFor(this.props.item.sku)}>{this.props.item.qty}</input></td>
                <td>${this.props.item.price}</td>

            </tr>
        )
    }
}