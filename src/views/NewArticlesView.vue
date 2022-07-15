<template>
  <div class="articles" v-loading="loading">
    <h2 class="my-3">
      {{ typeof post.slug === 'string' ? 'Edit' : 'New' }} Article
    </h2>
    <form>
      <ty-row :gutter="32" dir="ltr">
        <ty-col :xs="24" :sm="24" :md="14" :lg="16" :xl="18">
          <div class="ty-flex ty-flex-col ty-gap-15">
            <ty-input
              v-model="post.title"
              dir="ltr"
              label="Title"
              placeholder="Title"
              class="full-width"
              required
            />
            <ty-input
              v-model="post.description"
              dir="ltr"
              label="Description"
              placeholder="Description"
              class="full-width"
              required
            />
            <ty-input
              v-model="post.body"
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
              v-model="new_tag"
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
import { Article, ShowNotification } from '@/dto';
import { Component, Inject, Vue } from 'vue-property-decorator';

@Component({})
export default class NewArticlesView extends Vue {
  @Inject('notif') showNotification!: ShowNotification;
  loading = false;
  new_tag = '';
  post: any = {};
  @Inject('notif') show: any;

  submit(e: Event) {
    e.preventDefault();
    this.loading = true;
  }

  async getArticle() {
    this.loading = true;
    try {
      const res = await this.$api.getArticle(this.post.slug);
      this.post = res.data;
    } catch (err) {
      this.showNotification(
        'Failed to fetch article!',
        'Please check network connection and refresh page',
      );
    }
    this.loading = false;
  }

  mounted() {
    if (this.post.slug) this.getArticle();
  }

  created() {
    this.post.slug = this.$route.params.slug;
  }
}
</script>

<style></style>
