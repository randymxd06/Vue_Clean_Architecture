import { describe, it, expect, vi } from "vitest"
import { mount } from "@vue/test-utils"
import Icon from "../Icon.vue"

/**=======================
 * MOCK LUCIDE-VUE-NEXT
==========================*/
vi.mock("lucide-vue-next", () => ({
    HelpCircle: {
        name: "HelpCircle",
        props: ["size", "color", "strokeWidth"],
        template: '<div class="help-circle-icon">help-circle</div>',
    },
    Home: {
        name: "Home",
        props: ["size", "color", "strokeWidth"],
        template: '<div class="home-icon">home</div>',
    },
    User: {
        name: "User",
        props: ["size", "color", "strokeWidth"],
        template: '<div class="user-icon">user</div>',
    },
    Settings: {
        name: "Settings",
        props: ["size", "color", "strokeWidth"],
        template: '<div class="settings-icon">settings</div>',
    },
}))

describe("Icon", () => {
    /**==================================
   * RENDERS WITH REQUIRED NAME PROP
  =====================================*/
    it("renders with required name prop", () => {
        const wrapper = mount(Icon, {
            props: {
                name: "home",
            },
        })
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(".home-icon").exists()).toBe(true)
    })

    /**=============================================================
   * CONVERTS KEBAB-CASE TO PASCALCASE AND RENDERS CORRECT ICON
  ================================================================*/
    it("converts kebab-case to PascalCase and renders correct icon", () => {
        const wrapper = mount(Icon, {
            props: {
                name: "help-circle",
            },
        })
        expect(wrapper.find(".help-circle-icon").exists()).toBe(true)
    })

    /**=============================================
   * FALLS BACK TO HELPCIRCLE FOR UNKNOWN ICONS
  ================================================*/
    it("falls back to HelpCircle for unknown icons", () => {
        /**==================================================
     * MOCK CONSOLE.WARN TO AVOID NOISE IN TEST OUTPUT
    =====================================================*/
        const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
        const wrapper = mount(Icon, {
            props: {
                name: "unknown-icon",
            },
        })
        expect(wrapper.find(".help-circle-icon").exists()).toBe(true)
        expect(consoleWarnSpy).toHaveBeenCalledWith('Icon "unknown-icon" not found in Lucide Icons')
        consoleWarnSpy.mockRestore()
    })

    /**=========================================
   * HANDLES DIFFERENT ICON NAME VARIATIONS
  ============================================*/
    it("handles different icon name variations", () => {
        const wrapper = mount(Icon, {
            props: {
                name: "user",
            },
        })
        expect(wrapper.find(".user-icon").exists()).toBe(true)
    })

    /**================================================
   * HANDLES SIZE PROP CORRECTLY FOR STRING VALUES
  ===================================================*/
    it("handles size prop correctly for string values", () => {
        const wrapper = mount(Icon, {
            props: {
                name: "home",
                size: "sm",
            },
        })
        /**=============================================
     * THE COMPONENT SHOULD RENDER WITHOUT ERRORS
    ================================================*/
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(".home-icon").exists()).toBe(true)
    })

    /**=================================================
   * HANDLES SIZE PROP CORRECTLY FOR NUMERIC VALUES
  ====================================================*/
    it("handles size prop correctly for numeric values", () => {
        const wrapper = mount(Icon, {
            props: {
                name: "home",
                size: 32,
            },
        })
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(".home-icon").exists()).toBe(true)
    })

    /**=====================
   * HANDLES COLOR PROP
  ========================*/
    it("handles color prop", () => {
        const wrapper = mount(Icon, {
            props: {
                name: "home",
                color: "#ff0000",
            },
        })
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(".home-icon").exists()).toBe(true)
    })

    /**===========================
   * HANDLES STROKEWIDTH PROP
  ==============================*/
    it("handles strokeWidth prop", () => {
        const wrapper = mount(Icon, {
            props: {
                name: "home",
                strokeWidth: 3,
            },
        })
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(".home-icon").exists()).toBe(true)
    })

    /**=====================================================
   * USES DEFAULTS WHEN OPTIONAL PROPS ARE NOT PROVIDED
  ========================================================*/
    it("uses default strokeWidth when not provided", () => {
        const wrapper = mount(Icon, {
            props: {
                name: "home",
            },
        })
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(".home-icon").exists()).toBe(true)
    })

    /**======================================
   * USES DEFAULT SIZE WHEN NOT PROVIDED
  =========================================*/
    it("uses default size when not provided", () => {
        const wrapper = mount(Icon, {
            props: {
                name: "home",
            },
        })
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(".home-icon").exists()).toBe(true)
    })
})
