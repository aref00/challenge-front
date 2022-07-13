<template>
  <ty-container class="full-height">
    <div class="content my-auto">
      <div class="text-center">
        <custom-form>
          <ty-input
            v-model="body.email"
            name="email"
            dir="ltr"
            class="text-left ltr full-width"
            label="Email"
            clear
            required
          />
          <ty-input
            v-model="body.password"
            name="password"
            dir="ltr"
            class="text-left ltr full-width"
            label="Password"
            type="password"
            required
          />
          <ty-button @click="submit" buttonType="submit" class="full-width mt-4"
            >Login</ty-button
          >
          <div slot="footer">
            <span class="ty-color-black mr-2">Don't have account?</span>
            <router-link to="/register"
              ><a class="fw-600 ty-color-black">Register Now</a></router-link
            >
          </div>
        </custom-form>
      </div>
    </div>
  </ty-container>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import CustomForm from '@/components/CustomForm.vue';
import { LoginRequest, ShowNotification } from '@/dto';
@Component({
  components: {
    CustomForm,
  },
})
export default class LoginView extends Vue {
  @Inject('notif') showNotification!: ShowNotification;
  private body = new LoginRequest();
  async submit(e: Event) {
    e.preventDefault();
    try {
      const res = await this.$api.login(this.body);
      this.$api.setUser(res.data);
      this.$router.replace('/articles');
    } catch (err) {
      this.showNotification(
        'Login Failed!',
        'User name and/or Password is invalid',
      );
    }
  }
}
</script>

<style></style>
