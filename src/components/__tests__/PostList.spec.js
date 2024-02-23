import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import PostList from '../PostList.vue';

describe('Component PostList', () => {
    it('renders empty properly', () => {
        const wrapper = mount(PostList, { props: { posts: [] } });

        // Check if the component is rendered
        expect(wrapper.exists()).toBe(true);

        // No user available message
        expect(wrapper.text()).toContain('No post available');
    });

    it('renders posts properly', () => {
        const postsMock = [
            {
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                userId: 1,
                id: 2,
                title: 'qui est esse',
                body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
            },
            {
                userId: 1,
                id: 3,
                title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
                body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
            },
            {
                userId: 1,
                id: 4,
                title: 'eum et est occaecati',
                body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
            }
        ];
        const wrapper = mount(PostList, { props: { posts: postsMock } });

        // Check if the component is rendered
        expect(wrapper.exists()).toBe(true);

        // Validate each row to be rendered properly
        postsMock.forEach((post) => {
            const postRow = wrapper.find(`tr[data-pid="${post.id}"]`);
            expect(postRow.exists()).toBe(true);
            expect(postRow.text()).toContain(post.title);
            expect(postRow.text()).toContain(post.body);
        });
    });
});
