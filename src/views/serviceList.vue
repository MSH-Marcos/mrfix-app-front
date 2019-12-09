<template>
    <div>
        <div>
            <b-button v-on:click="logout()" variant="primary" style="margin-left:8px">Logout</b-button>
            <b-button v-on:click="logout()" variant="primary" style="margin-left:8px">User Details</b-button>
            <b-button v-on:click="goToOrders()" variant="primary" style="margin-left:8px">Orders</b-button>
        </div>
        <b-card-group deck>

            <b-card v-for="(service, index) in servicesData"
                    v-bind:key="index"
                    :title=service.name
                    v-model="servicesData"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                <b-card-text>
                    {{service.description}}
                </b-card-text>

                <b-button v-on:click="makeOrder(index)" variant="primary">Order Now!</b-button>
            </b-card>
        </b-card-group>
    </div>
</template>
<script>
    export default {
        name: 'ServiceList',
        data() {
            return {
                servicesData: [],
            }
        },
        mounted() {
            this.$api({
                method: 'get',
                url: ('/services/' + this.$parent.userData.city),
                headers: {
                    Authorization: this.$parent.userData.token
                }
            }).then((response) => {
                console.log(response.data);
                this.servicesData = response.data;
            }, (error) => {
                console.log(error);
            });
        },
        methods: {
            makeOrder(index) {
                this.$api({
                    method: 'post',
                    url: '/orders',
                    data: {
                        userId: this.$parent.userData.id,
                        serviceId: this.servicesData[index].id
                    },
                    headers: {
                        Authorization: this.$parent.userData.token
                    }
                }).then((response) => {
                    console.log(response.data);
                }, (error) => {
                    console.log(error);
                });
            },
            logout() {
                this.$parent.logout();
            },
            goToOrders() {
                this.$router.replace({ name: "orders" });
            }
        }
    }
</script>
