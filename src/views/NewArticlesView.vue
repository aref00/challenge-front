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

<script>
export default {};
</script>

<style></style>
