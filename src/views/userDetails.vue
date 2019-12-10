<template>
    <!-- Default form contact -->
    <div>
        <b-card bg-variant="light">
            <b-form-group label-cols-lg="3"
                          label="Regist New User"
                          label-size="lg"
                          label-class="font-weight-bold pt-0"
                          class="mb-0">

                <b-form-group label-cols-sm="3"
                              label="Complete Name:"
                              label-align-sm="right"
                              label-for="nested-state">
                    <b-form-input id="nested-completeName" v-model="userUpdateData.surname"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="Email:"
                              label-align-sm="right"
                              label-for="nested-email">
                    <b-form-input id="nested-email" v-model="userUpdateData.email"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="Address:"
                              label-align-sm="right"
                              label-for="nested-email">
                    <b-form-input id="nested-address" v-model="userUpdateData.address"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="City:"
                              label-align-sm="right"
                              label-for="nested-city">
                    <b-form-input id="nested-city" v-model="userUpdateData.city"></b-form-input>
                </b-form-group>

            </b-form-group>
            <div class="text-center mt-4">
                <button type="button" v-on:click="update()">Update</button>
                <button type="button" v-on:click="goBack()">Go Back</button>
                <button type="button" v-on:click="deleteUser()">Delete</button>
                <button type="button" v-on:click="logout()">Log Out</button>
            </div>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'UserDetails',
        data() {
            return {
                userUpdateData: {
                    name: this.$parent.userData.username,
                    id: this.$parent.userData.id,
                    surname: this.$parent.userData.completeName,
                    email: this.$parent.userData.email,
                    address: this.$parent.userData.address,
                    city: this.$parent.userData.city
                },
            }
        },
        methods: {
            goBack() {
                this.$router.replace({ name: "serviceList" });
            },
            update() {
                if (this.userUpdateData.completeName != "" && this.userUpdateData.email != "" && this.userUpdateData.address != "" && this.userUpdateData.city != "") {

                    this.$api({
                        method: 'put',
                        url: '/users/' + this.$parent.userData.id,
                        data: this.userUpdateData,
                        headers: {
                            Authorization: this.$parent.userData.token
                        }
                    }).then((response) => {
                        console.log(response);

                        this.$parent.userData.city = response.data.city;
                        this.$parent.userData.completeName = response.data.surname;
                        this.$parent.userData.email = response.data.email;
                        this.$parent.userData.address = response.data.address;
                    }, (error) => {
                        console.log(error);
                    });
                }
            }, deleteUser() {
                this.$api({
                    method: 'delete',
                    url: '/users/' + this.$parent.userData.id,
                    headers: {
                        Authorization: this.$parent.userData.token
                    }
                }).then((response) => {
                    console.log(response);

                    this.logout();
                }, (error) => {
                    console.log(error);
                });
            },
            logout() {
                this.$parent.logout();
            }
        }
    }
</script>