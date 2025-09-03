<script lang="ts" setup>
/**===============
 * BUTTON PROPS
==================*/
interface Props {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger"
    size?: "sm" | "md" | "lg"
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    fullWidth?: boolean
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
const props = withDefaults(defineProps<Props>(), {
    variant: "primary",
    size: "md",
    disabled: false,
    type: "button",
    fullWidth: false,
})

/**========
 * EMITS
===========*/
const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

/**============================
 * HANDLE CLICK EVENT
 * @param {MouseEvent} event
 * @returns {void}
===============================*/
const handleClick = (event: MouseEvent): void => {
    if (!props.disabled) {
        emit("click", event)
    }
}

/**=========================
 * BUTTON VARIANT CLASSES
============================*/
const variantClasses = {
    primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 transition-all duration-300 ease-in-out",
    secondary:
        "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500 transition-all duration-300 ease-in-out",
    outline:
        "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-500 transition-all duration-300 ease-in-out",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:bg-transparent dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-500 transition-all duration-300 ease-in-out",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400 transition-all duration-300 ease-in-out",
}

/**======================
 * BUTTON SIZE CLASSES
=========================*/
const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-2 text-base",
}
</script>

<template>

  <!--=================
    BUTTON COMPONENT
  =====================-->
  <button :type="type" :disabled="disabled" :class="[
    'inline-flex items-center justify-center font-medium rounded-lg max-sm:focus:outline-none max-sm:focus:ring-2 max-sm:focus:ring-offset-2 max-sm:transition',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
  ]" @click="handleClick">
    <slot />
  </button>

</template>
