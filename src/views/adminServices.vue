<template>
    <div>
        <div>
            <b-button v-on:click="logout()" variant="primary" style="margin-left:8px">Logout</b-button>
            <b-button v-on:click="goBack()" variant="primary" style="margin-left:8px">Go Back To User APP</b-button>
            <b-button v-on:click="create()" variant="primary" style="margin-left:8px">Create Service</b-button>
        </div>
        <b-table striped hover responsive="sm" :items="services" :fields="fields">
            <template v-slot:cell(show_details)="row">
                <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                    {{ row.detailsShowing ? 'Hide' : 'Show'}} Update
                </b-button>
            </template>
            <template v-slot:row-details="row">
                <b-card bg-variant="light">
                    <b-form-group label-cols-lg="3"
                                  label="Update Service"
                                  label-size="lg"
                                  label-class="font-weight-bold pt-0"
                                  class="mb-0">
                        <b-form-group label-cols-sm="3"
                                      label="Name:"
                                      label-align-sm="right"
                                      label-for="nested-name">
                            <b-form-input id="name" v-model="services[row.item.id -1].name"></b-form-input>
                        </b-form-group>
                        <b-form-group label-cols-sm="3"
                                      label="Description:"
                                      label-align-sm="right"
                                      label-for="nested-description">
                            <b-form-input id="description" v-model="services[row.item.id -1].description"></b-form-input>
                        </b-form-group>
                        <b-form-group label-cols-sm="3"
                                      label="Price:"
                                      label-align-sm="right"
                                      label-for="nested-price">
                            <b-form-input id="price" v-model="services[row.item.id -1].price"></b-form-input>
                        </b-form-group>
                        <b-form-group label-cols-sm="3"
                                      label="City:"
                                      label-align-sm="right"
                                      label-for="nested-city">
                            <b-form-input id="city" v-model="services[row.item.id -1].city"></b-form-input>
                        </b-form-group>
                        <b-form-group label-cols-sm="3"
                                      label="Available:"
                                      label-align-sm="right"
                                      label-for="nested-available">
                            <b-form-input id="available" v-model="services[row.item.id -1].available"></b-form-input>
                        </b-form-group>
                        <div class="text-center mt-4">
                            <button type="button" v-on:click="update(row.item.id)">Update</button>
                            <button type="button" v-on:click="viewOrders(row.item.id)">View Orders</button>
                        </div>
                    </b-form-group>
                </b-card>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fields: [{
                    key: 'id',
                    sortable: true
                }, {
                    key: 'name',
                    sortable: true
                }, 'description', {
                    key: 'price',
                    sortable: true
                }, {
                    key: 'city',
                    sortable: true
                }, 'available',
                    'show_details'],
                services: []
            }
        }, mounted() {
            this.$api({
                method: 'get',
                url: '/admin/services',
                headers: {
                    Authorization: this.$parent.userData.token
                }
            }).then((response) => {
                console.log(response.data);
                this.services = response.data;
            }, (error) => {
                console.log(error);
            });
        }, methods: {
            goBack() {
                this.$router.replace({ name: "serviceList" });
            },
            logout() {
                this.$parent.logout();
            },
            update(index) {
                this.$api({
                    method: 'put',
                    url: '/admin/services/' + index,
                    data: this.services[index - 1],
                    headers: {
                        Authorization: this.$parent.userData.token
                    }
                }).then((response) => {
                    console.log(response.data);
                }, (error) => {
                    console.log(error);
                });
            },
            create() {
                this.$router.replace({ name: "createService" });
            },
            viewOrders(index) {
                this.$api({
                    method: 'get',
                    url: ('admin/orders/service/' + index),
                    headers: {
                        Authorization: this.$parent.userData.token
                    }
                }).then((response) => {
                    console.log(response.data);
                    this.$parent.ordersService = response.data;

                    this.$router.replace({ name: "adminOrders" });
                }, (error) => {
                    console.log(error);
                });
            }
        }
    }
</script>