<template>
<div class="container">
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Date Of Birth</th>
                  <th>Role</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(user, i) in $store.state.users"
                :key="i">
                  <th>{{ user.id }}</th>
                  <th>{{ user.name }}</th>
                  <th>{{ user.gender }}</th>
                  <th>{{ user.email }}</th>
                  <th>{{ user.address }}</th>
                  <th>{{ user.db }}</th>
                  <th>{{ user.role }}</th>
                  <!-- <th><button @click="deleteUser">Delete</button></th> -->
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})

export default class MyList extends Vue {}
</script>

<style>
.container {
    margin-top: 50px;
}
</style>