<template>
  <div class="articles">
    <dashboard-header />
    <ty-container>
      <!-- <ty-header class="text-left" style="background: #fff">
        <dashboard-header />
      </ty-header> -->
      <ty-aside class="ty-bg-primary aside" width="256px">
        <div class="fs-22 p-2">Post</div>
        <ul class="p-0">
          <li>
            <router-link to="/articles">
              <ty-button class="full-width text-left">All Articles</ty-button>
            </router-link>
          </li>
          <li>
            <router-link to="/articles/new">
              <ty-button class="full-width text-left">New Article</ty-button>
            </router-link>
          </li>
        </ul>
      </ty-aside>
      <ty-container class="body">
        <ty-main>
          <router-view class="p-1 p-sm-2 p-md-3"></router-view>
        </ty-main>
      </ty-container>
    </ty-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomForm from '@/components/CustomForm.vue';
import DashboardHeader from '@/components/DashboardHeader.vue';
@Component({
  components: {
    CustomForm,
    DashboardHeader,
  },
})
export default class LoginView extends Vue {}
</script>

<style scoped>
.aside {
  height: calc(100vh - 51px);
}
ul {
  list-style: none;
}
</style>
