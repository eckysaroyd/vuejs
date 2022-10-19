<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">User List</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita hic magni molestiae non
          sapiente soluta
          veniam voluptatem. Corporis debitis fuga illo minima natus necessitatibus qui reiciendis, repellat
          reprehenderit rerum ut!</p>
      </div>
      <div class="row">
        <div class="col">
          <table class="table table-hover text-center table-striped">
            <thead class="bg-success text-white">
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Website</th>
              <th>Location</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";

export default {
  name: "UserList",
  data: function() {
    return {
      users: UserService.getAllUsers()
    };
  }
};
</script>

<style scoped>

</style>