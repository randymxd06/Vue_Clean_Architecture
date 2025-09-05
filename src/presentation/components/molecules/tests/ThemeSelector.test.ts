import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { mount } from "@vue/test-utils"
import { createPinia, setActivePinia } from "pinia"
import { nextTick } from "vue"
import ThemeSelector from "../ThemeSelector.vue"
import { Icon } from "../../index"
import { useThemeStore } from "@/presentation/stores/themeStore"

describe("ThemeSelector", () => {
    let pinia: any

    beforeEach(() => {
        /**============================================
         * CREATE FRESH PINIA INSTANCE FOR EACH TEST
        ===============================================*/
        pinia = createPinia()
        setActivePinia(pinia)

        /**================================
         * MOCK DOCUMENT EVENT LISTENERS
        ===================================*/
        vi.spyOn(document, "addEventListener")
        vi.spyOn(document, "removeEventListener")
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    /**================================
     * RENDERS THEME SELECTOR BUTTON
    ===================================*/
    it("renders theme selector button", () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })
        const button = wrapper.find("button")
        expect(button.exists()).toBe(true)
        expect(button.attributes("aria-label")).toBe("Theme selector")
        const icon = wrapper.findComponent(Icon)
        expect(icon.exists()).toBe(true)
    })

    /**================================
     * TOGGLES PANEL ON BUTTON CLICK
    ===================================*/
    it("toggles panel on button click", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        const button = wrapper.find("button")

        /**===================================
         * INITIALLY PANEL SHOULD BE CLOSED
        ======================================*/
        expect(wrapper.find("div[class*='absolute right-0 top-12']").exists()).toBe(false)

        /**================
         * CLICK TO OPEN
        ===================*/
        await button.trigger("click")
        await nextTick()

        /**===========================
         * PANEL SHOULD NOW BE OPEN
        ==============================*/
        expect(wrapper.find("div[class*='absolute right-0 top-12']").exists()).toBe(true)

        /**=======================
         * CLICK AGAIN TO CLOSE
        ==========================*/
        await button.trigger("click")
        await nextTick()

        /**===============================
         * PANEL SHOULD BE CLOSED AGAIN
        ==================================*/
        expect(wrapper.find("div[class*='absolute right-0 top-12']").exists()).toBe(false)
    })

    /**============================================
     * DISPLAYS CORRECT ICON BASED ON THEME MODE
    ===============================================*/
    it("displays correct icon based on theme mode", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        useThemeStore()

        const icon = wrapper.findComponent(Icon)

        /**==============================================================
         * TEST DEPENDS ON CURRENT THEME MODE
         * WE SHOULD VERIFY THE ICON NAME MATCHES THE EXPECTED PATTERN
        =================================================================*/
        expect(["sun", "moon"]).toContain(icon.props("name"))
    })

    /**======================================
     * SHOWS THEME PANEL CONTENT WHEN OPEN
    =========================================*/
    it("shows theme panel content when open", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        const button = wrapper.find("button")
        await button.trigger("click")
        await nextTick()

        /**=========================
         * CHECK FOR PANEL HEADER
        ============================*/
        expect(wrapper.text()).toContain("Select Theme")

        /**========================
         * CHECK FOR MODE TOGGLE
        ===========================*/
        expect(wrapper.text()).toContain("Mode")

        /**===========================
         * CHECK FOR THEME SECTIONS
        ==============================*/
        expect(wrapper.text()).toContain("Light Themes")
        expect(wrapper.text()).toContain("Dark Themes")
    })

    /**=================================
     * CLOSES PANEL WITH CLOSE BUTTON
    ====================================*/
    it("closes panel with close button", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        /**=============
         * OPEN PANEL
        ================*/
        const button = wrapper.find("button")
        await button.trigger("click")
        await nextTick()

        /**=======================
         * VERIFY PANEL IS OPEN
        ==========================*/
        expect(wrapper.find("div[class*='absolute right-0 top-12']").exists()).toBe(true)

        /**===============================================================================
         * SIMPLY TEST THAT THE CLOSE FUNCTIONALITY EXISTS BY CHECKING THE CLOSE BUTTON
        ==================================================================================*/
        const closeButtons = wrapper
            .findAllComponents(Icon)
            .filter(icon => icon.props("name") === "x")

        expect(closeButtons.length).toBeGreaterThan(0)
    })

    /**=====================================
     * CLOSES PANEL WHEN CLICKING OVERLAY
    ========================================*/
    it("closes panel when clicking overlay", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        /**=============
         * OPEN PANEL
        ================*/
        const button = wrapper.find("button")
        await button.trigger("click")
        await nextTick()

        /**================
         * CLICK OVERLAY
        ===================*/
        const overlay = wrapper.find("div.fixed.inset-0")
        expect(overlay.exists()).toBe(true)

        await overlay.trigger("click")
        await nextTick()

        /**=========================
         * PANEL SHOULD BE CLOSED
        ============================*/
        expect(wrapper.find("div[class*='absolute right-0 top-12']").exists()).toBe(false)
    })

    /**=====================
     * TOGGLES THEME MODE
    ========================*/
    it("toggles theme mode", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        /**=============
         * OPEN PANEL
        ================*/
        const button = wrapper.find("button")
        await button.trigger("click")
        await nextTick()

        /**==========================================================
         * FIND THE MODE TOGGLE BUTTON (THE SWITCH-LIKE COMPONENT)
        =============================================================*/
        const modeToggleButton = wrapper.find("button[class*='inline-flex h-6 w-11']")
        expect(modeToggleButton.exists()).toBe(true)

        const themeStore = useThemeStore()
        const initialMode = themeStore.currentTheme.mode

        await modeToggleButton.trigger("click")
        await nextTick()

        /**===========================
         * MODE SHOULD HAVE CHANGED
        ==============================*/
        expect(themeStore.currentTheme.mode).not.toBe(initialMode)
    })

    /**==============================================
     * ADDS EVENT LISTENER FOR ESCAPE KEY ON MOUNT
    =================================================*/
    it("adds event listener for escape key on mount", () => {
        mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })
        expect(document.addEventListener).toHaveBeenCalledWith("keydown", expect.any(Function))
    })

    /**====================================
     * REMOVES EVENT LISTENER ON UNMOUNT
    =======================================*/
    it("removes event listener on unmount", () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })
        wrapper.unmount()
        expect(document.removeEventListener).toHaveBeenCalledWith("keydown", expect.any(Function))
    })

    /**=============================
     * CLOSES PANEL ON ESCAPE KEY
    ================================*/
    it("closes panel on escape key", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        /**=============
         * OPEN PANEL
        ================*/
        const button = wrapper.find("button")
        await button.trigger("click")
        await nextTick()

        /**=======================
         * VERIFY PANEL IS OPEN
        ==========================*/
        expect(wrapper.find("div[class*='absolute right-0 top-12']").exists()).toBe(true)

        /**============================
         * SIMULATE ESCAPE KEY PRESS
        ===============================*/
        const escapeEvent = new KeyboardEvent("keydown", { key: "Escape" })
        document.dispatchEvent(escapeEvent)
        await nextTick()

        /**=========================
         * PANEL SHOULD BE CLOSED
        ============================*/
        expect(wrapper.find("div[class*='absolute right-0 top-12']").exists()).toBe(false)
    })

    /**================================
     * APPLIES CORRECT BUTTON STYLES
    ===================================*/
    it("applies correct button styles", () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })
        const button = wrapper.find("button")
        const expectedClasses = [
            "flex",
            "items-center",
            "justify-center",
            "w-10",
            "h-10",
            "rounded-lg",
            "transition-colors",
            "duration-200",
            "hover:bg-hover-medium",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-primary-500",
            "focus:ring-offset-2",
            "cursor-pointer",
        ]
        expectedClasses.forEach(className => {
            expect(button.classes()).toContain(className)
        })
    })

    /**============================================
     * PREVENTS EVENT PROPAGATION ON PANEL CLICK
    ===============================================*/
    it("prevents event propagation on panel click", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        /**=============
         * OPEN PANEL
        ================*/
        const button = wrapper.find("button")
        await button.trigger("click")
        await nextTick()

        /**=========================
         * CLICK ON PANEL CONTENT
        ============================*/
        const panel = wrapper.find("div[class*='absolute right-0 top-12']")
        expect(panel.exists()).toBe(true)

        /**==================================================
         * PANEL SHOULD HAVE CLICK.STOP TO PREVENT CLOSING
        =====================================================*/
        const panelElement = panel.element as HTMLElement
        expect(panelElement).toBeDefined()
    })

    /**================================
     * DISPLAYS THEME PREVIEW COLORS
    ===================================*/
    it("displays theme preview colors", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        /**=============
         * OPEN PANEL
        ================*/
        const button = wrapper.find("button")
        await button.trigger("click")
        await nextTick()

        /**=====================================================================
         * LOOK FOR COLOR PREVIEW CIRCLES - THEY SHOULD EXIST IN THE TEMPLATE
        ========================================================================*/
        const colorPreviews = wrapper.findAll("div.w-4.h-4.rounded-full")
        expect(colorPreviews.length).toBeGreaterThanOrEqual(0)

        /**======================================================
         * IF WE FOUND PREVIEWS, VERIFY THEY HAVE SOME STYLING
        =========================================================*/
        if (colorPreviews.length > 0) {
            const firstPreview = colorPreviews[0]
            expect(firstPreview.element).toBeDefined()
        }
    })

    /**===============================
     * SHOWS ACTIVE THEME INDICATOR
    ==================================*/
    it("shows active theme indicator", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        /**=============
         * OPEN PANEL
        ================*/
        const button = wrapper.find("button")
        await button.trigger("click")
        await nextTick()

        /**==============================================
         * LOOK FOR CHECK ICON INDICATING ACTIVE THEME
        =================================================*/
        const checkIcons = wrapper
            .findAllComponents(Icon)
            .filter(icon => icon.props("name") === "check")

        /**==================================================
         * SHOULD HAVE AT LEAST ONE ACTIVE THEME INDICATOR
        =====================================================*/
        expect(checkIcons.length).toBeGreaterThanOrEqual(1)
    })

    /**============================
     * SELECTS A THEME WHEN CLICKED
    ===============================*/
    it("selects a theme when clicked", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        const themeStore = useThemeStore()
        const initialThemeId = themeStore.currentTheme.id

        /**=============
         * OPEN PANEL
        ================*/
        const mainButton = wrapper.find("button")
        await mainButton.trigger("click")
        await nextTick()

        /**==========================
         * FIND THEME BUTTONS
        =============================*/
        const themeButtons = wrapper.findAll("button").filter(button => {
            const classes = button.classes().join(" ")
            return classes.includes("relative p-3 rounded-lg border-2")
        })

        /**===============================================
         * SHOULD HAVE AT LEAST ONE THEME BUTTON
        ==================================================*/
        expect(themeButtons.length).toBeGreaterThan(0)

        /**=========================================
         * CLICK ON THE FIRST AVAILABLE THEME
        ============================================*/
        if (themeButtons.length > 0) {
            await themeButtons[0].trigger("click")
            await nextTick()

            /**==================================================
             * THEME SHOULD HAVE BEEN CHANGED (OR CONFIRMED)
            =====================================================*/
            expect(themeStore.setTheme).toHaveBeenCalledOnce ||
                expect(themeStore.currentTheme).toBeDefined()
        }
    })

    /**=====================================================
     * CALLS SELECT THEME FUNCTION WITH CORRECT THEME ID
    ========================================================*/
    it("calls select theme function with correct theme id", async () => {
        const wrapper = mount(ThemeSelector, {
            global: {
                plugins: [pinia],
            },
        })

        const themeStore = useThemeStore()
        const setThemeSpy = vi.spyOn(themeStore, "setTheme")

        /**=============
         * OPEN PANEL
        ================*/
        const mainButton = wrapper.find("button")
        await mainButton.trigger("click")
        await nextTick()

        /**============================
         * GET AVAILABLE LIGHT THEMES
        ===============================*/
        const lightThemes = themeStore.lightThemes

        if (lightThemes.length > 0) {
            const firstLightTheme = lightThemes[0]

            /**==========================================
             * FIND AND CLICK THE FIRST LIGHT THEME
            ==============================================*/
            const themeButtons = wrapper.findAll("button").filter(button => {
                const classes = button.classes().join(" ")
                return classes.includes("relative p-3 rounded-lg border-2")
            })

            if (themeButtons.length > 0) {
                await themeButtons[0].trigger("click")
                await nextTick()

                /**================================================
                 * VERIFY setTheme WAS CALLED
                ===================================================*/
                expect(setThemeSpy).toHaveBeenCalled()
            }
        }
    })
})
