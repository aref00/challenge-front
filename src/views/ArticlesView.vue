<template>
  <div class="articles">
    <h2 class="my-3">All Posts</h2>
    <ty-table :data="filtered_tokens" dir="ltr">
      <ty-table-column dir="ltr" prop="id" label="#" min-width="50px" />
      <ty-table-column dir="ltr" prop="title" label="Title" min-width="100px" />
      <ty-table-column label="Author" min-width="100px">
        <template slot-scope="row"> @{{ row.author }} </template>
      </ty-table-column>
      <ty-table-column prop="exerpt" label="Excerpt" min-width="200px" />
      <ty-table-column label="Created" min-width="100px">
        <template slot-scope="row">
          <div>@{{ row.createdAt }}</div>
          <div>
            <ty-button>بیشتر</ty-button>
          </div>
        </template>
      </ty-table-column>
    </ty-table>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import CustomForm from '@/components/CustomForm.vue';
import { Article, ShowNotification } from '@/dto';
@Component({
  components: {
    CustomForm,
  },
})
export default class ArticlesView extends Vue {
  @Inject('notif') showNotification!: ShowNotification;
  private articles: Article[] = [];
  private count = 0;
  private page = 1;
  async loadArticles() {
    try {
      const res = await this.$api.getArticles();
      this.articles = res.data.articles;
      this.count - res.data.articlesCount;
    } catch (err) {
      this.showNotification('Failed Loading Data!', 'Please try again.');
    }
  }

  mounted() {
    this.loadArticles();
  }
}
</script>

<style></style>
