<script>
export default {
    name: 'PostList',
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
};
</script>

<template>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="posts.length > 0">
                <tr v-for="post in posts" :key="post.id" :data-pid="post.id">
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </template>
            <template v-else>
                <tr>
                    <td colspan="2" class="text-center">No post available</td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
