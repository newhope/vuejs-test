<script>
import useUsersStore from '@/stores/users';
import UserList from '@/components/UserList.vue';

let usersStore;

export default {
    name: 'UsersView',
    components: {
        UserList
    },
    setup() {
        usersStore = useUsersStore();
    },
    data() {
        return {
            filterText: '', // the name filter
            users: [], // users list
            loaded: false // flag to indicate if users are loaded
        };
    },
    mounted() {
        this.fetchUsers();
    },
    computed: {
        filteredUsers() {
            if (this.filterText.trim().length > 0) {
                // the name search logic shall be from the store/model as the model knows its data better
                return usersStore.searchName(this.filterText.trim());
            } else {
                // return the loaded users list if no filter,
                return this.users;
            }
        }
    },
    methods: {
        async fetchUsers() {
            this.users = await usersStore.fetchUsers();
            this.loaded = true;
            return this.users;
        }
    }
};
</script>

<template>
    <h3 class="mt-4 mb-4">User List</h3>

    <div class="mb-4">
        <input
            type="text"
            name="query"
            class="form-control"
            placeholder="Name search ..."
            maxlength="50"
            :disabled="!loaded"
            v-model="filterText"
        />
    </div>

    <template v-if="loaded">
        <UserList :users="filteredUsers" />
    </template>
    <div v-else class="text-center">
        <div class="spinner-border text-center" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
