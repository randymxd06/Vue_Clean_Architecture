<script lang="ts" setup>
import { Button, Icon, NotificationBadge } from '../index';

/**===============================
 * TOPBAR ACTIONS PROPS
==================================*/
interface Props {
  showThemeToggle?: boolean;
  showNotifications?: boolean;
  notificationCount?: number;
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
withDefaults(defineProps<Props>(), {
  showThemeToggle: true,
  showNotifications: true,
  notificationCount: 0
});

/**===============
 * DEFINE EMITS
==================*/
const emit = defineEmits<{
  'toggle-theme': [];
  'notifications-click': [];
}>();
</script>

<template>

  <!--===================
    TOPBAR ACTIONS
  =======================-->
  <section class="flex items-center space-x-2">

    <!--===============
      THEME TOGGLE
    ===================-->
    <Button 
      v-if="showThemeToggle"
      variant="ghost" 
      size="sm"
      @click="$emit('toggle-theme')"
    >
      <Icon name="moon" size="sm" />
    </Button>

    <!--================
      NOTIFICATIONS
    ====================-->
    <div v-if="showNotifications" class="relative">
      <Button 
        variant="ghost" 
        size="sm"
        @click="$emit('notifications-click')"
      >
        <Icon name="bell" size="sm" />
      </Button>
      
      <!--======================
        NOTIFICATION BADGE
      ==========================-->
      <NotificationBadge 
        v-if="notificationCount > 0"
        :count="notificationCount"
      />
    </div>

  </section>
  
</template>
