<template>
    <!-- Default form contact -->
    <div>
        <b-card bg-variant="light">
            <b-form-group label-cols-lg="3"
                          label="Create New Service"
                          label-size="lg"
                          label-class="font-weight-bold pt-0"
                          class="mb-0">
                <b-form-group label-cols-sm="3"
                              label="Name:"
                              label-align-sm="right"
                              label-for="nested-name">
                    <b-form-input id="name" v-model="serviceCreateData.name"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="Description:"
                              label-align-sm="right"
                              label-for="nested-password">
                    <b-form-input id="description" v-model="serviceCreateData.description"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="Price:"
                              label-align-sm="right"
                              label-for="nested-price">
                    <b-form-input id="nested-price" v-model="serviceCreateData.price"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="Available:"
                              label-align-sm="right"
                              label-for="nested-available">
                    <b-form-input id="nested-available" v-model="serviceCreateData.available"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="City:"
                              label-align-sm="right"
                              label-for="nested-city">
                    <b-form-input id="nested-city" v-model="serviceCreateData.city"></b-form-input>
                </b-form-group>

            </b-form-group>
            <div class="text-center mt-4">
                <button type="button" v-on:click="create()">Create</button>
                <button type="button" v-on:click="goBack()">Go Back</button>
            </div>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                serviceCreateData: {
                    name: "",
                    description: "",
                    price: "",
                    available: "",
                    city: ""
                },
            }
        },
        methods: {
            goBack() {
                this.$router.replace({ name: "adminServices" });
            },
            create() {
                if (this.serviceCreateData.name != "" && this.serviceCreateData.description != "" && this.serviceCreateData.price != ""
                    && this.serviceCreateData.available != "" && this.serviceCreateData.city != "") {


                    this.$api({
                        method: 'post',
                        url: '/admin/services',
                        data: this.serviceCreateData,
                        headers: {
                            Authorization: this.$parent.userData.token
                        }
                    }).then((response) => {
                        console.log(response);
                        this.goBack();
                    }, (error) => {
                        console.log(error);
                    });


                }
            }
        }
    }
</script>