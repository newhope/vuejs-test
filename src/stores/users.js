import { defineStore } from 'pinia';

export default defineStore('Users', {
    state() {
        return {
            users: [],
            isFetched: false
        };
    },

    actions: {
        fetchUsers() {
            // return a promise for more granular control
            return new Promise((resolve, reject) => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then((response) => response.json())
                    .then((json) => {
                        // assign inner props before sending `resolve` signal
                        this.users = json;
                        this.isFetched = true;

                        resolve(this.users);
                    })
                    .catch((error) => {
                        console.error('Error fetching users:', error);
                        reject(error);
                    });
            });
        },

        searchName(query) {
            return this.users.filter((user) => {
                // case-insensitive search
                return user.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
        }
    }
});
