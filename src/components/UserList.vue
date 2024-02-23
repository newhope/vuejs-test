<script>
export default {
    name: 'UserList',
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    methods: {
        goToUserPost(id) {
            this.$router.push(`/users/${id}/posts`);
        }
    }
};
</script>

<template>
    <table class="table table-bordered table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="users.length > 0">
                <tr v-for="user in users" :key="user.id" @click="goToUserPost(user.id)" :data-uid="user.id" class="user-row">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.address.city }}</td>
                    <td>{{ user.company.name }}</td>
                </tr>
            </template>
            <template v-else>
                <tr>
                    <td colspan="4" class="text-center">No user available</td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<style scoped>
.user-row {
    cursor: pointer;
}
</style>
