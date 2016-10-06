import _ from 'lodash';

export default class InventoryService {

    constructor() {
        this.inventory = [
            {
                sku: "abc123",
                name: "Pliny the Elder",
                price: 12.99,
                size: 12,
                uom: "oz",
                inStock: 400
            },
            {
                sku: "abc456",
                name: "Pliny the Younger",
                price: 12.99,
                size: 8,
                uom: "oz",
                inStock: 40

            },
            {
                sku: "abc789",
                name: "Fremont Summer Ale",
                price: 7.99,
                size: 6,
                uom: "pck",
                inStock: 20
            }
        ];
    }

    getInventory() {
        return _.clone(this.inventory);
    }

    updateInventory(item) {

        let index = _.indexOf(this.inventory, _.find(this.inventory, item.sku));
        this.inventory.splice(index, 1, item);

    }

    getStockFor(aSku) {

        let item = _.find(this.inventory, {sku: aSku});
        return item.inStock;

    }

}