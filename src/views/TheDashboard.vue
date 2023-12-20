<template>
  <Navbar/>
  <div class="container-fluid">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import Navbar from '../components/TheNavbar.vue';

export default {
  components: {
    Navbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const cookies = document.cookie.split('; ').find((row) => row.startsWith('hexToken='));
    const token = cookies ? cookies.split('=')[1] : null;
    console.log(token);
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user)
      .then((res) => {
        console.log(res);
        if (!res.data.success) {
          this.$router.push('/userlogin');
        }
      });
  },
};
</script>
