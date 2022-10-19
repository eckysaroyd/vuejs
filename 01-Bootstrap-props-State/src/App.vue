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

    <Customer age="25" designation="Software Engineer" name="Rajan" />

    <Employee />
  </div>

</template>

<script>
import Customer from "@/components/Customer";
import Employee from "@/components/Employee";

export default {
  components: { Employee, Customer }
};
</script>

<style>
@import "./styles.css";
</style>
