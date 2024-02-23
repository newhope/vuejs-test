import { defineStore } from 'pinia';

export default defineStore('UserPost', {
    // state: possible of caching posts list of users, not in current scope.

    actions: {
        fetchUserPosts(userId) {
            // return a promise for more granular control
            return new Promise((resolve, reject) => {
                fetch('https://jsonplaceholder.typicode.com/posts/?userId=' + userId)
                    .then((response) => response.json())
                    .then((json) => resolve(json))
                    .catch((error) => {
                        console.error(`Error fetching user #${userId} posts`, error);
                        reject(error);
                    });
            });
        }
    }
});
