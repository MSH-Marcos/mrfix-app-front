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
                // Note `isActive` is left out and will not appear in the rendered table
                fields: ['serviceName', 'price', 'creationDate', 'arriveDate'],
                orders: this.$parent.userData.orders
            }
        }, mounted() {
            this.$api({
                method: 'get',
                url: ('/orders/user/' + this.$parent.userData.id),
                headers: {
                    Authorization: this.$parent.userData.token
                }
            }).then((response) => {
                console.log(response.data);
                this.$parent.userData.orders = response.data;
            }, (error) => {
                console.log(error);
            });
        }, methods: {
            goBack() {
                this.$router.replace({ name: "serviceList" });
            },
            logout() {
                console.log("dsad");
                this.$parent.logout();
            }
        }
    }
</script>