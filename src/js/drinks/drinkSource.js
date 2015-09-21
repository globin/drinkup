class DrinkSource {
    static mockDrinks = [
        {
            name: 'Spezi',
            price: 0.50,
        },
        {
            name: 'Radler',
            price: 0.80,
        },
        {
            name: 'Pali',
            price: 0.60,
        },
        {
            name: 'Tegernseer',
            price: 1.00,
        },
        {
            name: 'Augustiner',
            price: 0.90,
        },
    ];

    static fetch() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(DrinkSource.mockDrinks);
            }, 0);
        });
    }
}

export default DrinkSource;
