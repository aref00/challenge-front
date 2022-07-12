<template>
  <div>
    <ty-card class="custom-form mx-auto" title>
      <h4 class="fs-47 ty-color-warm-grey py-2 py-md-3 py-lg-3 pg-xl-3">
        {{ title }}
      </h4>
      <form class="text-left ty-flex ty-flex-col ty-gap-25">
        <slot />
      </form>
    </ty-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class CustomForm extends Vue {
  @Prop({ default: 'LOGIN' }) title!: string;
}
</script>

<style lang="scss">
.custom-form {
  background-color: #eceeef;
  border: none;
  max-width: 450px;
}
</style>
