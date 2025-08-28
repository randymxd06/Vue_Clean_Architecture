<script lang="ts" setup>
/**===============
 * BUTTON PROPS
==================*/
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  fullWidth: false
});

/**========
 * EMITS
===========*/
const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

/**============================
 * HANDLE CLICK EVENT
 * @param {MouseEvent} event
 * @returns {void}
===============================*/
const handleClick = (event: MouseEvent): void => {
  if (!props.disabled) {
    emit('click', event);
  }
};

/**=========================
 * BUTTON VARIANT CLASSES
============================*/
const variantClasses = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 transition-all duration-300 ease-in-out',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 transition-all duration-300 ease-in-out',
  outline: 'border border-border text-text-primary hover:bg-primary-50 focus:ring-primary-500 transition-all duration-300 ease-in-out',
  ghost: 'bg-transparent text-text-primary hover:bg-primary-100 focus:ring-primary-500 transition-all duration-300 ease-in-out',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 transition-all duration-300 ease-in-out'
};

/**======================
 * BUTTON SIZE CLASSES
=========================*/
const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-2 text-base'
};
</script>

<template>

  <!--=================
    BUTTON COMPONENT
  =====================-->
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center font-medium rounded-lg max-sm:focus:outline-none max-sm:focus:ring-2 max-sm:focus:ring-offset-2 max-sm:transition',
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
  
</template>
