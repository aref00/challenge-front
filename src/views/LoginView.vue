<template>
  <ty-container class="full-height">
    <div class="content my-auto">
      <div class="text-center">
        <custom-form>
          <ty-input
            v-model="body.email"
            dir="ltr"
            class="text-left ltr full-width"
            label="Email"
            clear
            required
          />
          <ty-input
            v-model="body.password"
            dir="ltr"
            class="text-left ltr full-width"
            label="Password"
            type="password"
            required
          />
          <ty-button type="submit" class="full-width mt-4">Login</ty-button>
          <div class="ty-flex ty-gap-11 fs-12 fs-sm-14 fs-md-16">
            <p class="ty-color-black mb-0 pb-0">Don't have account?</p>
            <a class="fw-600 ty-color-black">Register Now</a>
          </div>
        </custom-form>
      </div>
    </div>
  </ty-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomForm from '@/components/CustomForm.vue';
import { LoginRequest } from '@/dto';
@Component({
  components: {
    CustomForm,
  },
})
export default class LoginView extends Vue {
  private body = new LoginRequest();
}
</script>

<style></style>
