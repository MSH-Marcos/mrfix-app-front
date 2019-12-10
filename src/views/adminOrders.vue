<template>
    <div>
        <div>
            <b-button v-on:click="logout()" variant="primary" style="margin-left:8px">Logout</b-button>
            <b-button v-on:click="goBack()" variant="primary" style="margin-left:8px">Go Back</b-button>
        </div>
        <b-table striped hover :items="orders" :fields="fields"></b-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fields: ['serviceName', 'price', 'creationDate', 'arriveDate'],
                orders: this.$parent.ordersService
            }
        },
        methods: {
            goBack() {
                this.$router.replace({ name: "adminServices" });
            },
            logout() {
                this.$parent.logout();
            }
        }
    }
</script>