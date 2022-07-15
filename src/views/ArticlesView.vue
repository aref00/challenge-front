<template>
  <div class="articles">
    <h2 class="my-3">All Posts</h2>
    <ty-table :data="articles" dir="ltr">
      <ty-table-column dir="ltr" prop="id" label="#" min-width="32px" />
      <ty-table-column dir="ltr" prop="title" label="Title" min-width="100px" />
      <ty-table-column label="Author" min-width="100px">
        <template slot-scope="row"> @{{ row.author.username }} </template>
      </ty-table-column>
      <ty-table-column label="Excerpt" min-width="200px" width="500px">
        <template slot-scope="row">
          {{ row.body?.slice(0, 20) }}
        </template>
      </ty-table-column>
      <ty-table-column class="text-left" label="Created" min-width="200px">
        <template slot-scope="row">
          <div class="ty-flex ty-justify-start ty-gap-10 align-items-center">
            <div>{{ row.createdAt | date }}</div>
            <div>
              <dropdown>
                <ty-button color="dark-sky-blue"
                  >...
                  <i class="ty-icon ty-icon-arrow-drop-down fs-10 ml-2 pl-1"
                /></ty-button>
                <template #popper>
                  <router-link
                    :to="{ name: 'edit', params: { slug: row.slug } }"
                  >
                    <ty-button type="clear" color="charcoal-grey" width="175px"
                      >Edit</ty-button
                    >
                  </router-link>
                  <div class="full-width border-bottom" style="height: 2px" />
                  <ty-button
                    type="clear"
                    color="charcoal-grey"
                    @click="() => deleteArticle(row.slug)"
                    width="175px"
                    >Delete</ty-button
                  >
                </template>
              </dropdown>
            </div>
          </div>
        </template>
      </ty-table-column>
    </ty-table>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import CustomForm from '@/components/CustomForm.vue';
import { Dropdown } from 'floating-vue';
import { Article, ShowNotification } from '@/dto';
import { date } from '@/mixins/date';
@Component({
  components: {
    CustomForm,
    Dropdown,
  },
  filters: {
    date,
  },
})
export default class ArticlesView extends Vue {
  @Inject('notif') showNotification!: ShowNotification;
  private articles: Article[] = [
    {
      id: 1,
      slug: 'test',
      title: 'title',
      description: 'description',
      body: 'body',
      createdAt: new Date(),
      tagList: [],
      updatedAt: new Date(),
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'user',
        bio: 'bio',
        image: 'image',
        following: false,
      },
    },
  ];
  private count = 0;
  private page = 1;
  async loadArticles() {
    try {
      const res = await this.$api.getArticles();
      this.articles = res.data.articles;
      this.articles.map((a, i) => (a.id = i));
      this.count = res.data.articlesCount;
    } catch (err) {
      this.showNotification('Failed Loading Data!', 'Please try again.');
    }
  }

  async deleteArticle(slug: string) {
    try {
      await this.$api.deleteArticles(slug);
      this.articles = this.articles.filter((a) => a.slug !== slug);
      this.articles.map((a, i) => (a.id = i));
      this.count -= 1;
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
