<template>
    <!-- Default form contact -->
    <form>
        <p class="h4 text-center mb-4">Regist</p>

        <!-- Default input name -->
        <label for="defaultFormContactNameEx" class="grey-text">Username: </label>
        <input type="text" name="username" v-model="userRegistData.name" placeholder="Username">

        <br>

        <!-- Default input email -->
        <label for="defaultFormContactNameEx" class="grey-text">Password: </label>
        <input type="text" name="password" v-model="userRegistData.password" placeholder="Password">

        <br>

        <!-- Default input subject -->
        <label for="defaultFormContactNameEx" class="grey-text">Complete name: </label>
        <input type="text" name="completeName" v-model="userRegistData.surname" placeholder="Complete Name">

        <br>

        <!-- Default input subject -->
        <label for="defaultFormContactNameEx" class="grey-text">Email: </label>
        <input type="text" name="email" v-model="userRegistData.email" placeholder="Email">

        <br>

        <!-- Default input subject -->
        <label for="defaultFormContactNameEx" class="grey-text">Address: </label>
        <input type="text" name="address" v-model="userRegistData.address" placeholder="Address">

        <br>

        <label for="defaultFormContactNameEx" class="grey-text">City: </label>
        <select v-model="userRegistData.city">
            <option value="Valencia">Valencia</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
        </select>

        <br>

        <div class="text-center mt-4">
            <button type="button" v-on:click="register()">Register</button>
            <button type="button" v-on:click="goToLogin()">Go Back</button>
        </div>
    </form>
    <!-- Default form contact -->
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
                console.log("dsa");
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