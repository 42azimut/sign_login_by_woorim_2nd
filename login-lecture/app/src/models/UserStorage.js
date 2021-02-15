"user strict";

class UserStorage {
    static #users = {
        id: ["jay", "trumph", "blackpink"],
        psword: ["1234", "12345", "123abc"],
        name: ["NaDaeJs", "GaeNari", "DustDawn"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };
}

module.exports = UserStorage;