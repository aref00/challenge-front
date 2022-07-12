<template>
  <ty-container class="full-height">
    <div class="content my-auto">
      <div class="text-center">
        <custom-form title="REGISTER">
          <ty-input
            v-model="body.user"
            name="user"
            dir="ltr"
            class="text-left ltr full-width"
            label="User"
            clear
            required
          />
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
            >Register</ty-button
          >
          <div slot="footer">
            <span class="ty-color-black mr-2">Already Registered?</span>
            <router-link to="/login"
              ><a class="fw-600 ty-color-black">Login</a></router-link
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
    console.log('clicked');

    try {
      await this.$api.login(this.body);
    } catch (err) {
      this.showNotification(
        'Register Failed!',
        'User name and/or Password is invalid',
      );
    }
  }
}
</script>

<style></style>
