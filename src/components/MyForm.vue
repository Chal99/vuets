<template>
    <div class="form">
        <form action="" @submit.prevent="addUser">
            <div class="form-group row mb-3">
                <label class="col-md-3" for="name">Name : </label>
                <div class="col-md-9 inline">
                    <input type="text" v-model="name" class="form-control" id="name" />
                </div>
                <p>{{ this.errors[0] }}</p>
            </div>
            <div class="form-group row mb-3">
                <div class="col-md-9 inline">
                    <label for="male" class="gender"><input type="radio" name="gender" v-model="gender" class="form-control" id="male" value="male" />male</label>
                    <label for="female"><input type="radio" name="gender" v-model="gender" class="form-control" id="female" value="female" />female</label>
                </div>
            </div>
            <div class="form-group row mb-3">
                <label class="col-md-3" for="email">Email : </label>
                <div class="col-md-9 inline">
                    <input type="email" v-model="email" class="form-control" id="email" />
                </div>
            </div>
            <div class="form-group row mb-3">
                <label class="col-md-3" for="address">Address : </label>
                <div class="col-md-9 inline">
                    <textarea type="text" v-model="address" class="form-control" id="address" />
                </div>
            </div>
            <MyAge @getDB="getAge" />
            <div class="form-group row mb-3">
                <label class="col-md-3" for="address">User Role : </label>
                <div class="col-md-9 inline">
                    <select class="form-select" name="role" id="role"  @change="onChange($event)" >
                        <option disabled selected>Select User Role</option>
                        <option v-for="(role,i) in roles" :key="i">{{ role }}</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "../store"
import MyAge from "./MyAge.vue"
@Options({
    components:{
        MyAge
    }
})

export default class MyForm extends Vue {
    public name = " ";
    public gender = " ";
    public email = " ";
    public address = " ";
    public roles = ["Administrator","User","Guest"];
    public role = " ";
    public db= " ";
    public age = " "
    public errors: string[] = [];
    public validation=false;
    public onChange(e:Event):any {
       this.role=(e.target as HTMLInputElement).value;
    }
    getAge(n:Date){
        this.db=n.toJSON().slice(0,10).replace(/-/g,'/');
    }
    // public validate() {
    //     if(this.name==""){
    //         this.errors[0]="user required";
    //     }
    //     else{
    //         this.validation=true;
    //     }
    // }
    public addUser():void {
        // if(this.validation==true){
        store.dispatch("addUser",
        {
            name: this.name, 
            gender: this.gender,
            email: this.email,
            address: this.address,
            db:this.db,
            age: this.age,
            role: this.role,
        });
        // }
        this.name="";
        this.email="";
        this.gender="";
        this.address="";
        this.db="";
        this.age="";
    }
}

</script>
<style scoped>
.form {
    margin: 0 auto;
    width: 600px;
    background: rgb(243, 243, 243);
    padding: 20px;
}
.inline {
    display: inline-block;
}
.gender {
    margin-right: 30px;
}
</style>