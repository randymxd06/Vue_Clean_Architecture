<script lang="ts" setup>
import UserProfile from "@/presentation/components/molecules/UserProfile.vue"

/**=================
 * USER INTERFACE
====================*/
interface User {
    name: string
    email: string
    avatarSrc: string
}

/**=======================
 * SIDEBAR FOOTER PROPS 
==========================*/
interface Props {
    user: User
    showUserDropdown?: boolean
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
withDefaults(defineProps<Props>(), {
    showUserDropdown: true,
})

/**========
 * EMITS
===========*/
const emit = defineEmits<{
    "settings-click": [event: Event]
    "inbox-click": [event: Event]
    "user-dropdown-toggle": []
    "user-menu-click": [action: string]
}>()

/**====================================
 * HANDLE USER DROPDOWN TOGGLE EVENT
 * @returns {void}
=======================================*/
const handleUserDropdownToggle = (): void => {
    emit("user-dropdown-toggle")
}

/**===============================
 * HANDLE USER MENU CLICK EVENT
 * @param action
 * @returns {void}
==================================*/
const handleUserMenuClick = (action: string): void => {
    emit("user-menu-click", action)
    console.log("User menu action:", action)
}
</script>

<template>

  <!--=========================
    SIDEBAR FOOTER COMPONENT
  =============================-->
  <section class="p-4 mt-auto">

    <!--=============
      USER PROFILE
    =================-->
    <article class="pt-4">
      <UserProfile :name="user.name" :email="user.email" :avatar-src="user.avatarSrc" :show-dropdown="showUserDropdown"
        @toggle-dropdown="handleUserDropdownToggle" @menu-item-click="handleUserMenuClick" />
    </article>

  </section>

</template>
