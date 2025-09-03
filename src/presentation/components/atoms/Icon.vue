<script lang="ts" setup>
import * as LucideIcons from "lucide-vue-next"
import { computed } from "vue"

/**=============
 * ICON PROPS
================*/
interface Props {
    name: string
    size?: number | "sm" | "md" | "lg"
    color?: string
    strokeWidth?: number
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
const props = withDefaults(defineProps<Props>(), {
    size: "md",
    strokeWidth: 2,
})

/**================================
 * GET SIZE FUNCTION
 * @param {number | string} size
 * @returns {number}
===================================*/
const getSize = (size: number | string): number => {
    if (typeof size === "number") return size
    const sizeMap: Record<string, number> = {
        sm: 16,
        md: 20,
        lg: 24,
    }
    return sizeMap[size] || 20
}

/**====================================================
 * CONVERT KEBAB-CASE TO PASCALCASE FOR LUCIDE NAMES
 * @param name
 * @returns {string}
=======================================================*/
const toPascalCase = (name: string): string => {
    return name
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
}

/**==================================
 * SEARCH FOR THE ICON DYNAMICALLY
=====================================*/
const IconComponent = computed(() => {
    /**================================
   * FIRST TRY WITH THE EXACT NAME
  ===================================*/
    const iconName = toPascalCase(props.name)

    /**==============================================
   * IF IT DOES NOT EXIST, TRY COMMON VARIATIONS
  =================================================*/
    const variations = [iconName, `${iconName}Icon`, iconName.replace("Icon", "")]

    for (const variant of variations) {
        if (variant in LucideIcons) {
            return (LucideIcons as any)[variant]
        }
    }

    /**==================================================
   * IF YOU CANNOT FIND THE ICON, USE A DEFAULT ICON
  =====================================================*/
    console.warn(`Icon "${props.name}" not found in Lucide Icons`)

    return LucideIcons.HelpCircle
})
</script>

<template>

  <!--===============
    ICON COMPONENT
  ===================-->
  <component :is="IconComponent" :size="getSize(size)" :color="color" :stroke-width="strokeWidth" />

</template>
