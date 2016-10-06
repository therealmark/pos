import React, {Component} from 'react';
import BasketItem from './BasketItem';

export default class ItemList extends Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired
    };

    render() {

        let createItemRow = (item) => {

            return (
            <BasketItem key={item.sku} item={item}/>

            )

        };

        return (

            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Size</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.items.map(createItemRow, this)}
                    </tbody>
                </table>
            </div>
        )
    }

}