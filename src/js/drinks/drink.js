import pf from '../utils/priceFormat';

export default class Drink {
    static KEY = 'name';

    constructor(name, price) {
        this.name = name;
        this.price = parseFloat(price.toString().replace(',', '.'));
    }

    get priceString() {
        return pf(this.price);
    }
}
