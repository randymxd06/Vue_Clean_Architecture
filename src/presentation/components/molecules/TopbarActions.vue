<script lang="ts" setup>
import { Button, Icon, NotificationBadge, ThemeSelector } from '../index';
import { useThemeStore } from '@/presentation/stores/themeStore';

/**=======================
 * TOPBAR ACTIONS PROPS
==========================*/
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
defineEmits<{
  'toggle-theme': [];
  'notifications-click': [];
}>();

/**===============
 * THEME STORE
==================*/
const themeStore = useThemeStore();
</script>

<template>

  <!--=========================
    TOPBAR ACTIONS COMPONENT
  =============================-->
  <section class="flex items-center space-x-2">

    <!--=============
      THEME SELECTOR
    =================-->
    <ThemeSelector v-if="showThemeToggle" />

    <!--==============
      NOTIFICATIONS
    ==================-->
    <article v-if="showNotifications" class="relative">

        <!--======================
            NOTIFICATION BUTTON
        ==========================-->
        <Button 
            variant="ghost" 
            size="md"
            @click="$emit('notifications-click')"
        >
            <Icon name="bell" size="md" />
        </Button>
        
        <!--=====================
            NOTIFICATION BADGE
        =========================-->
        <NotificationBadge 
            v-if="notificationCount > 0"
            :count="notificationCount"
        />

    </article>

  </section>
  
</template>
