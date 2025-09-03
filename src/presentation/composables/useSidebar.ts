import { onMounted, onUnmounted, type Ref, ref } from "vue"

/**==================================
 * USE SIDEBAR RESOURCES INTERFACE
=====================================*/
interface UseSidebar {
    sidebarVisible: Ref<boolean, boolean>
    isMobile: Ref<boolean, boolean>
    openSidebar: () => void
    closeSidebar: () => void
    toggleSidebar: () => void
}

/**=========================
 * USE SIDEBAR COMPOSABLE
 * @returns {UseSidebar}
============================*/
export const useSidebar = (): UseSidebar => {
    /**==============================
     * MOBILE BREAKPOINT IN PIXELS
    =================================*/
    const MOBILE_BREAKPOINT: number = 768

    /**=========
     * STATES
    ============*/
    const sidebarVisible = ref(false)
    const isMobile = ref(window.innerWidth <= MOBILE_BREAKPOINT)
    const userToggled = ref(false)

    /**=========================
     * HANDLE RESIZE FUNCTION
     * @returns {void}
    ============================*/
    const handleResize = (): void => {
        const wasMobile = isMobile.value
        isMobile.value = window.innerWidth <= MOBILE_BREAKPOINT

        /**===========================================================
         * ONLY ADJUST AUTOMATICALLY IF THE USER HAS NOT INTERACTED
        ==============================================================*/
        if (!userToggled.value) {
            sidebarVisible.value = !isMobile.value
        }

        /**====================================================================
         * IF WE SWITCH FROM MOBILE TO DESKTOP OR VICE VERSA, RESET THE FLAG
        =======================================================================*/
        if (wasMobile !== isMobile.value) {
            userToggled.value = false
            sidebarVisible.value = !isMobile.value
        }
    }

    /**========================
     * OPEN SIDEBAR FUNCTION
     * @returns {void}
    ===========================*/
    const openSidebar = (): void => {
        sidebarVisible.value = true
        userToggled.value = true
    }

    /**=========================
     * CLOSE SIDEBAR FUNCTION
     * @returns {void}
    ============================*/
    const closeSidebar = (): void => {
        sidebarVisible.value = false
        userToggled.value = true
    }

    /**==========================
     * TOGGLE SIDEBAR FUNCTION
     * @returns {void}
    =============================*/
    const toggleSidebar = (): void => {
        sidebarVisible.value = !sidebarVisible.value
        userToggled.value = true
    }

    /**==================
     * ON MOUNTED
    =====================*/
    onMounted((): void => {
        sidebarVisible.value = !isMobile.value
        window.addEventListener("resize", handleResize)
    })

    /**===============
     * ON UNMOUNTED
    ==================*/
    onUnmounted((): void => {
        window.removeEventListener("resize", handleResize)
    })

    return {
        sidebarVisible,
        isMobile,
        openSidebar,
        closeSidebar,
        toggleSidebar,
    }
}
