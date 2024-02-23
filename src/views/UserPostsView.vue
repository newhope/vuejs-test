<script>
import useUserPostsStore from '@/stores/userPosts';
import PostList from '@/components/PostList.vue';

export default {
    name: 'UsersPosts',
    components: {
        PostList
    },
    props: {
        // view's props will be populated by $route
        userId: {
            required: true
        }
    },
    data() {
        return {
            posts: [], // user's posts list
            loaded: false // flag to indicate if posts are loaded
        };
    },
    mounted() {
        // Fetch user's post on mounted
        this.fetchUserPosts();
    },
    methods: {
        async fetchUserPosts() {
            const userPostStore = useUserPostsStore();
            this.posts = await userPostStore.fetchUserPosts(this.userId);
            this.loaded = true;
            return this.posts;
        }
    }
};
</script>

<template>
    <h3 class="mt-4 mb-4">User #{{ userId }}'s Posts</h3>

    <template v-if="loaded">
        <PostList :posts="posts" />
    </template>
    <div v-else class="text-center">
        <div class="spinner-border text-center" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
