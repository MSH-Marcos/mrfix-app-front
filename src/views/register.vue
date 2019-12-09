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
                              label="Username:"
                              label-align-sm="right"
                              label-for="nested-username">
                    <b-form-input id="username" v-model="userRegistData.name"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="Password:"
                              label-align-sm="right"
                              label-for="nested-password">
                    <b-form-input id="password" v-model="userRegistData.password"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="Complete Name:"
                              label-align-sm="right"
                              label-for="nested-state">
                    <b-form-input id="nested-completeName" v-model="userRegistData.surname"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="Email:"
                              label-align-sm="right"
                              label-for="nested-email">
                    <b-form-input id="nested-email" v-model="userRegistData.email"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="Address:"
                              label-align-sm="right"
                              label-for="nested-email">
                    <b-form-input id="nested-address" v-model="userRegistData.address"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3"
                              label="City:"
                              label-align-sm="right"
                              label-for="nested-city">
                    <b-form-input id="nested-city" v-model="userRegistData.city"></b-form-input>
                </b-form-group>

            </b-form-group>
            <div class="text-center mt-4">
                <button type="button" v-on:click="register()">Register</button>
                <button type="button" v-on:click="goToLogin()">Go Back</button>
            </div>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                userRegistData: {
                    name: "",
                    password: "",
                    surname: "",
                    email: "",
                    address: "",
                    city: ""
                },
            }
        },
        methods: {
            goToLogin() {
                this.$router.replace({ name: "login" });
            },
            register() {
                if (this.userRegistData.username != "" && this.userRegistData.password != "" && this.userRegistData.completeName != ""
                    && this.userRegistData.email != "" && this.userRegistData.address != "" && this.userRegistData.city != "") {


                    this.$api({
                        method: 'post',
                        url: '/register',
                        data: this.userRegistData,
                        headers: {
                            Authorization: this.$parent.userData.token
                        }
                    }).then((response) => {
                        console.log(response);
                        this.goToLogin();
                    }, (error) => {
                        console.log(error);
                    });


                }
            }
        }
    }
</script>