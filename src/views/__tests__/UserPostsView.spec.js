import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { mount } from '@vue/test-utils';

import UserPostsView from '../UserPostsView.vue';

describe('View Users', () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        setActivePinia(createPinia());
    });

    const testUserId = 1;
    it('initial state', async () => {
        const wrapper = mount(UserPostsView, {
            pros: {
                userId: testUserId
            }
        });

        // Data state
        expect(wrapper.vm.$data.loaded).toBe(false);
        expect(Array.isArray(wrapper.vm.$data.posts)).toBe(true);
        expect(wrapper.vm.$data.posts.length).equal(0);

        // UI state
        expect(wrapper.text()).toContain('Loading...');
    });

    it('renders properly', async () => {
        const wrapper = mount(UserPostsView, {
            pros: {
                userId: testUserId
            }
        });

        const posts = await wrapper.vm.fetchUserPosts();

        // Data state
        expect(wrapper.vm.$data.loaded).toBe(true);
        expect(Array.isArray(wrapper.vm.$data.posts)).toBe(true);
        expect(wrapper.vm.$data.posts.length).equal(posts.length);

        // UI state
        expect(wrapper.text()).not.toContain('Loading...');
    });
});
