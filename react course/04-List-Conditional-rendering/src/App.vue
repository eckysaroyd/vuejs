<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque consequuntur
            cupiditate doloremque eaque explicabo fugiat illo illum, iste itaque maiores maxime minus neque nisi odio
            perferendis quaerat, quod, ut?</p>
        </div>
      </div>
    </div>

    <UserList />

  </div>

</template>

<script>

import UserList from "@/components/UserList";

export default {
  components: { UserList }
};
</script>

<style>
@import "./styles.css";
</style>
