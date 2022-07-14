import { shallowMount } from '@vue/test-utils';
import LoginView from '@/views/LoginView.vue';

const factory = () => {
  return shallowMount(LoginView, {
    provide: {
      notif: (title: string, content: string) => {
        return null;
      },
    },
    stubs: ['router-link', 'ty-button', 'ty-container', 'ty-input'],
  });
};

describe('LoginView.vue', () => {
  it('renders Login Form', () => {
    const wrapper = factory();
    expect(wrapper.find('.ty-color-black').exists()).toBe(true);
  });
});
