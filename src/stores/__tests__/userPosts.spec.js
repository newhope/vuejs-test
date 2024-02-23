import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import useUserPostsStore from '../userPosts.js';

describe('Store UserPosts', () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        setActivePinia(createPinia());
    });

    const user_id = 1;
    it(`Fetching user #${user_id} posts`, async () => {
        const store = useUserPostsStore();
        const posts = await store.fetchUserPosts(user_id);
        expect(Array.isArray(posts)).toBeTruthy();
        expect(posts.length).toBeGreaterThan(0);
    });
});
