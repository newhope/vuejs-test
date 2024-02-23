import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import useUsersStore from '../users.js';

describe('Store Users', () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        setActivePinia(createPinia());
    });

    it('Initial state', () => {
        const usersStore = useUsersStore();
        expect(usersStore.isFetched).toBeFalsy();
        expect(usersStore.users.length).equal(0);
    });

    it('Fetching data', async () => {
        const usersStore = useUsersStore();
        const users = await usersStore.fetchUsers();

        expect(Array.isArray(users)).toBeTruthy();

        expect(users.length).toBeGreaterThan(0);
        expect(usersStore.users.length).toBe(users.length);
        expect(usersStore.isFetched).toBeTruthy();
    });

    it('Search name', async () => {
        const usersStore = useUsersStore();
        const users = await usersStore.fetchUsers();

        // Not found
        const res0 = usersStore.searchName('this dummy name should not exist');
        expect(res0.length).toBe(0);

        // pick a random user in list
        const random_index = Math.floor(Math.random() * (users.length + 1));
        const user = users[random_index];

        // exact name search
        const res1 = usersStore.searchName(user.name);
        expect(res1.length).toBeGreaterThan(0);

        // case-insensitive name search
        const res2 = usersStore.searchName(user.name.toLowerCase());
        expect(res2.length).toBeGreaterThan(0);

        // part of string search
        const res3 = usersStore.searchName(user.name.substr(3));
        expect(res3.length).toBeGreaterThan(0);
    });
});
