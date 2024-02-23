import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { mount } from '@vue/test-utils';

import UsersView from '../UsersView.vue';

describe('View Users', () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        setActivePinia(createPinia());
    });

    it('initial state', async () => {
        const wrapper = mount(UsersView);

        // Data state
        expect(wrapper.vm.$data.loaded).toBe(false);
        expect(Array.isArray(wrapper.vm.$data.users)).toBe(true);
        expect(wrapper.vm.$data.users.length).equal(0);

        // UI state
        expect(wrapper.text()).toContain('Loading...');
    });

    it('renders properly', async () => {
        const wrapper = mount(UsersView);

        const users = await wrapper.vm.fetchUsers();

        // Data state
        expect(wrapper.vm.$data.loaded).toBe(true);
        expect(Array.isArray(wrapper.vm.$data.users)).toBe(true);
        expect(wrapper.vm.$data.users.length).equal(users.length);

        // UI state
        expect(wrapper.text()).not.toContain('Loading...');
    });

    it('Search name - not found', async () => {
        const wrapper = mount(UsersView);

        const users = await wrapper.vm.fetchUsers();

        // Data state
        expect(wrapper.vm.$data.loaded).toBe(true);
        expect(Array.isArray(wrapper.vm.$data.users)).toBe(true);
        expect(wrapper.vm.$data.users.length).equal(users.length);

        // populating search
        const inputField = wrapper.find('input[name="query"]');
        await inputField.setValue('the name that not exists !');
        await wrapper.vm.$nextTick();

        // no user found
        expect(Array.isArray(wrapper.vm.filteredUsers)).toBe(true);
        expect(wrapper.vm.filteredUsers.length).equal(0);
    });

    it('Search name properly', async () => {
        const wrapper = mount(UsersView);

        const users = await wrapper.vm.fetchUsers();

        // Data state
        expect(users.length).greaterThan(0);
        expect(wrapper.vm.$data.loaded).toBe(true);
        expect(Array.isArray(wrapper.vm.$data.users)).toBe(true);
        expect(wrapper.vm.$data.users.length).equal(users.length);

        // pick the first user
        const user = users[0];

        // populating search
        const inputField = wrapper.find('input[name="query"]');
        await inputField.setValue(user.name);
        await wrapper.vm.$nextTick(); // make sure all updated

        // Found user(s)
        expect(Array.isArray(wrapper.vm.filteredUsers)).toBe(true);
        expect(wrapper.vm.filteredUsers.length).greaterThanOrEqual(1);
    });
});
