<script lang="ts" setup>
import UserProfile from '@/presentation/components/molecules/UserProfile.vue';

interface User {
  name: string;
  email: string;
  avatarSrc: string;
}

interface Props {
  user: User;
  showUserDropdown?: boolean;
}

withDefaults(defineProps<Props>(), {
  showUserDropdown: true
});

const emit = defineEmits<{
  'settings-click': [event: Event];
  'inbox-click': [event: Event];
  'user-dropdown-toggle': [];
  'user-menu-click': [action: string];
}>();

const handleUserDropdownToggle = () => {
  emit('user-dropdown-toggle');
};

const handleUserMenuClick = (action: string) => {
  emit('user-menu-click', action);
  console.log('User menu action:', action);
};

</script>

<template>

  <section class="p-4 mt-auto">

    <!-- User Profile -->
    <article class="pt-4">
      <UserProfile
        :name="user.name"
        :email="user.email"
        :avatar-src="user.avatarSrc"
        :show-dropdown="showUserDropdown"
        @toggle-dropdown="handleUserDropdownToggle"
        @menu-item-click="handleUserMenuClick"
      />
    </article>

  </section>

</template>
