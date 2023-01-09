<template>
  <div class="container mt-3">
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-if="!loading && Object.keys(user).length > 0" class="row">
      <div class="col">
        <pre>{{ user }}</pre>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link class="btn btn-success ms-3" to="/users">Back</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import { UserService } from "@/services/UserService";
import Spinner from "@/components/Spinner";

export default {
  name: "UserDetails",
  components: { Spinner },
  data: function() {
    return {
      loading: false,
      user: {},
      errorMessage: null
    };
  },
  created: async function() {
    let userId = this.$route.params.userId;
    try {
      this.loading = true;
      let response = await UserService.getUser(userId);
      this.loading = false;
      this.user = response.data;
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
    }
  }
};
</script>

<style scoped>

</style>