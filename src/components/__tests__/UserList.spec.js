import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import UserList from '../UserList.vue';

describe('Component UserList', () => {
    it('renders empty properly', () => {
        const wrapper = mount(UserList, { props: { users: [] } });

        // Check if the component is rendered
        expect(wrapper.exists()).toBe(true);

        // No user available message
        expect(wrapper.text()).toContain('No user available');
    });

    it('renders users properly', () => {
        const usersMock = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496'
                    }
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets'
                }
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                address: {
                    street: 'Victor Plains',
                    suite: 'Suite 879',
                    city: 'Wisokyburgh',
                    zipcode: '90566-7771',
                    geo: {
                        lat: '-43.9509',
                        lng: '-34.4618'
                    }
                },
                phone: '010-692-6593 x09125',
                website: 'anastasia.net',
                company: {
                    name: 'Deckow-Crist',
                    catchPhrase: 'Proactive didactic contingency',
                    bs: 'synergize scalable supply-chains'
                }
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                address: {
                    street: 'Douglas Extension',
                    suite: 'Suite 847',
                    city: 'McKenziehaven',
                    zipcode: '59590-4157',
                    geo: {
                        lat: '-68.6102',
                        lng: '-47.0653'
                    }
                },
                phone: '1-463-123-4447',
                website: 'ramiro.info',
                company: {
                    name: 'Romaguera-Jacobson',
                    catchPhrase: 'Face to face bifurcated interface',
                    bs: 'e-enable strategic applications'
                }
            }
        ];
        const wrapper = mount(UserList, { props: { users: usersMock } });

        // Check if the component is rendered
        expect(wrapper.exists()).toBe(true);

        // Validate each row to be rendered properly
        usersMock.forEach((user) => {
            const userRow = wrapper.find(`tr[data-uid="${user.id}"]`);
            expect(userRow.exists()).toBe(true);
            expect(userRow.text()).toContain(user.name);
            expect(userRow.text()).toContain(user.email);
            expect(userRow.text()).toContain(user.address.city);
            expect(userRow.text()).toContain(user.company.name);
        });
    });
});
