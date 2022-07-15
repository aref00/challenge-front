<template>
  <div class="options" role="combobox" @keydown="handleKeyDown">
    <div class="ty-select__search">
      <div>
        <slot name="node" />
      </div>
    </div>
    <div
      class="ty-shadow ty-bg-contrast-primary mt-2 option-content"
      :style="{ width, maxHeight: height }"
    >
      asdf
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DropDown extends Vue {
  @Prop({ default: '256px' }) width!: string;
  @Prop({ default: '256px' }) height!: string;
  open = false;

  handleKeyDown(e: KeyboardEvent) {
    if (!open) return;

    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      e.preventDefault();
      this.open = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.options {
  position: relative;
  overflow-y: visible;
  .option-content {
    z-index: 1000;
    // display: none;
    overflow-y: visible;
    // left: -4px;
    top: 0;
    background: blue;
    position: absolute;
  }
  &:focus,
  &:focus-within {
    .option-content {
      display: block;
    }
  }
}
</style>
<style>
.cell {
  overflow: visible !important;
}
</style>
