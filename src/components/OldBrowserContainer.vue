<template>
  <div class="old-browser">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@at-root {
  @for $var from 1 to 25 {
    .old-browser .ty-gap-#{$var} {
      margin-bottom: calc(-1px * #{$var}px);
      margin-left: calc(-1px * #{$var}px);
      > * {
        margin-bottom: #{$var}px;
        margin-left: #{$var}px;
      }
    }
  }
}
</style>
