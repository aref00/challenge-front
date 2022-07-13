<template>
  <div class="articles" v-loading="loading">
    <h2 class="my-3">All Posts</h2>
    <form>
      <ty-row gutter="32" dir="ltr">
        <ty-col :xs="24" :sm="24" :md="14" :lg="16" :xl="18">
          <div class="ty-flex ty-flex-col ty-gap-15">
            <ty-input
              dir="ltr"
              label="Title"
              placeholder="Title"
              class="full-width"
              required
            />
            <ty-input
              dir="ltr"
              label="Description"
              placeholder="Description"
              class="full-width"
              required
            />
            <ty-input
              type="textarea"
              dir="ltr"
              label="Body"
              class="full-width mb-3"
              required
            />
          </div>
        </ty-col>
        <ty-col :xs="24" :sm="24" :md="10" :lg="8" :xl="6">
          <div class="ty-flex ty-flex-col ty-gap-15 mb-3">
            <ty-input
              dir="ltr"
              label="Tags"
              placeholder="New tag"
              class="full-width"
            />
            <!-- <ty-input
            type="textarea"
            dir="ltr"
            label="Description"
            placeholder="Description"
            class="full-width"
            required
          /> -->
          </div>
        </ty-col>
      </ty-row>
      <ty-button buttonType="submit" @click="submit"> Submit </ty-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NewArticlesView extends Vue {
  loading = false;

  submit(e: Event) {
    e.preventDefault();
    this.loading = true;
  }
}
</script>

<style></style>
