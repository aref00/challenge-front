<template>
  <div class="header ty-bg-charcoal-grey full-width">
    <!-- <div> -->
    <div class="ty-flex ty-space-between py-1 py-md-2 px-2 px-md-4">
      <a
        href="/articles"
        class="ty-flex ty-gap-10 align-items-center ty-color-white"
      >
        <div class="ty-flex ty-gap-5 ty-flex-wrap">
          <h1 class="fw-800 fs-14 fs-sm-18 fs-md-20 fs-lg-22 my-0">
            Arvan Challenge
          </h1>
          <span>Welcome {{ user.username }}</span>
        </div>
        <!-- <div class="tayeh-name fw-900 fs-20"> <a :href="tayeh_link"> تایه </a> | <router-link to="/">{{instance_username}}</router-link></div> -->
      </a>
      <div class="ty-flex align-items-center">
        <div>
          <ty-button
            type="outline"
            color="dark-sky-blue"
            class="fw-600 fs-12 fs-sm-14 fs-lg-16"
          >
            Logout
          </ty-button>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script lang="ts">
import { LoginResponse } from '@/dto';
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
@Component({
  computed: {
    ...mapGetters({ isCustomer: 'isCustomer', customer: 'CUSTOMER' }),
  },
})
export default class InstanceHeader extends Vue {
  user: LoginResponse = {
    username: 'test',
    email: '',
    token: '',
    bio: '',
    image: '',
  };

  public get nonAuthPage(): boolean {
    return (
      [
        'Customer-Login',
        'Customer-Register',
        'admin-login',
        'Product',
        'CartHistory',
      ].indexOf(this.$route.name as string) === -1
    );
  }

  public get tayeh_link(): string {
    return process.env.VUE_APP_TAYEH;
  }
}
</script>
