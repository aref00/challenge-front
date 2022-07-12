<template>
  <div>
    <div class="notifications p-3 fs-16">
      <div
        class="notification py-2 pl-3 pr-2 ty-flex ty-space-between align-items-center"
        v-for="(item, i) in notifications"
        :key="i"
      >
        <div>
          <span class="fw-600 mr-2">{{ item.title }}</span>
          <span>{{ item.content }}</span>
        </div>
        <ty-button
          type="clear"
          size="small"
          class="m-0 px-2 py-1 ty-opacity-20"
          color="charcoal-grey"
          @click="
            () =>
              (notifications = notifications.filter((n) => n.id !== item.id))
          "
        >
          <i class="ty-icon ty-icon-close" />
        </ty-button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Provide, Vue } from 'vue-property-decorator';
type Notification = {
  id: number;
  title: string;
  content: string;
};
@Component({})
export default class NotificationWrapper extends Vue {
  @Provide('notif') showNotification(title: string, content: string) {
    const id = this.notifications.length;
    this.notifications.push({ title, content, id });
    setTimeout(() => {
      this.notifications = this.notifications.filter((n) => n.id !== id);
    }, 8000);
  }
  notifications: Notification[] = [];
}
</script>

<style lang="scss" scoped>
.notifications {
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  right: 0;
  top: 0;
  max-width: 100%;
  width: 520px;
  z-index: 999;
  .notification {
    background: #e7cecd;
    color: #9f4f48;
    border: solid 1px var(--pinkish-grey);
  }
}
</style>
