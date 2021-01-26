<template>
  <div>
    <input type="text" v-model="formDate.name" />
    <input type="password" v-model="formDate.password" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      formDate: {
        name: "",
        password: "",
      },
    };
  },
};
</script>
