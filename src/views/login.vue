<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.name" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
        <button type="button" v-on:click="goToRegister()">Register</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    name: "",
                    password: ""
                },
            }
        },
        methods: {
            login() {
                if (this.input.name != "" && this.input.password != "") {

                    this.$api
                        .post('/login?username=' + this.input.name + '&password=' + this.input.password)
                        .then(response => {
                            this.$parent.userData.token = response.headers.authorization;

                            this.getUserData();
                        }).catch(error => console.log(error));
                }
            },
            getUserData() {
                this.$api({
                    method: 'post',
                    url: '/users/login',
                    data: this.input,
                    headers: {
                        Authorization: this.$parent.userData.token
                    }
                }).then((response) => {
                    this.$parent.userData.city = response.data.city;
                    this.$parent.userData.id = response.data.id;
                    this.$parent.userData.username = response.data.name;
                    this.$parent.userData.completeName = response.data.surname;
                    this.$parent.userData.email = response.data.email;
                    this.$parent.userData.address = response.data.address;
                    this.$parent.userData.rol = response.data.rol;
                    this.$parent.userData.orders = response.data.orders;

                    this.$router.replace({ name: "serviceList" });
                }, (error) => {
                    console.log(error);
                });
            },
            goToRegister() {
                this.$router.replace({ name: "register" });
            }
        }
    }
</script>

            //    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
            //        this.$emit("authenticated", true);
            //        this.$router.replace({ name: "secure" });
            //    } else {
            //        console.log("The username and / or password is incorrect");
            //    }
            //} else {
            //    console.log("A username and password must be present");

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>