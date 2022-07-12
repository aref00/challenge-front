<template>
  <div id="app" dir="ltr">
    <notification-wrapper>
      <div class="ty-relative">
        <router-view v-if="checkFlexGapSupport()" />
        <old-browser-container v-else>
          <router-view />
        </old-browser-container>
      </div>
    </notification-wrapper>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OldBrowserContainer from './components/OldBrowserContainer.vue';
import NotificationWrapper from './components/NotificationWrapper.vue';

@Component({
  components: { OldBrowserContainer, NotificationWrapper },
})
export default class App extends Vue {
  isSupported?: boolean;

  checkFlexGapSupport(): boolean {
    // Use the cached value if it has been defined
    if (this.isSupported !== undefined) {
      return this.isSupported;
    }

    // Create a flex container with row-gap set
    const flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';
    flex.style.position = 'absolute';

    // Create two, elements inside it
    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    // Append to the DOM (needed to obtain scrollHeight)
    document.body.appendChild(flex);

    // Flex container should be 1px high due to the row-gap
    this.isSupported = flex.scrollHeight === 1;

    // Remove element from the DOM after you are done with it
    flex.parentNode?.removeChild(flex);

    return this.isSupported;
  }
}
</script>
