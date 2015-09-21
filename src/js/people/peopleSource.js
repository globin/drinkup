class PeopleSource {
    static mockPeople = [
        {
            name: 'Jack',
        },
        {
            name: 'John',
        },
        {
            name: 'Peter',
        },
        {
            name: 'George',
        },
    ];

    static fetch() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(PeopleSource.mockPeople);
            }, 0);
        });
    }
}

export default PeopleSource;
