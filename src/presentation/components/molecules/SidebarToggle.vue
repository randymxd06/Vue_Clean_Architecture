<script lang="ts" setup>
import { Button, Icon } from "../index"

/**========================
 * SIDEBAR TOGGLE PROPS
===========================*/
interface Props {
    isMobile: boolean
    sidebarVisible?: boolean
}

/**===============
 * DEFINE PROPS
==================*/
const props = defineProps<Props>()

/**===============
 * DEFINE EMITS
==================*/
const emit = defineEmits<{
    "open-sidebar": []
    "toggle-sidebar": []
}>()

/**================================
 * HANDLE SIDEBAR TOGGLE ACTION
===================================*/
const handleToggle = (): void => {
    if (props.isMobile) {
        emit("open-sidebar")
    } else {
        emit("toggle-sidebar")
    }
}
</script>

<template>

  <!--=======================
    SIDEBAR TOGGLE BUTTON
  ===========================-->
  <Button variant="ghost" size="sm" @click="handleToggle" class="transition-transform hover:scale-110">
    <Icon name="sidebar" size="md" />
  </Button>

</template>
