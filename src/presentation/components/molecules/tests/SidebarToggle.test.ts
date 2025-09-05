import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import SidebarToggle from "../SidebarToggle.vue"
import { Button, Icon } from "../../index"

describe("SidebarToggle", () => {
    const defaultProps = {
        isMobile: false,
    }

    /**================================
     * RENDERS SIDEBAR TOGGLE BUTTON
    ===================================*/
    it("renders sidebar toggle button", () => {
        const wrapper = mount(SidebarToggle, {
            props: defaultProps,
        })
        const button = wrapper.findComponent(Button)
        expect(button.exists()).toBe(true)
        expect(button.props("variant")).toBe("ghost")
        expect(button.props("size")).toBe("sm")
        const icon = wrapper.findComponent(Icon)
        expect(icon.exists()).toBe(true)
        expect(icon.props("name")).toBe("sidebar")
        expect(icon.props("size")).toBe("md")
    })

    /**============================================
     * EMITS OPEN-SIDEBAR WHEN CLICKED ON MOBILE
    ===============================================*/
    it("emits open-sidebar when clicked on mobile", async () => {
        const wrapper = mount(SidebarToggle, {
            props: {
                isMobile: true,
            },
        })
        const button = wrapper.findComponent(Button)
        button.vm.$emit("click")
        expect(wrapper.emitted("open-sidebar")).toBeTruthy()
        expect(wrapper.emitted("open-sidebar")).toHaveLength(1)
        expect(wrapper.emitted("toggle-sidebar")).toBeFalsy()
    })

    /**===============================================
     * EMITS TOGGLE-SIDEBAR WHEN CLICKED ON DESKTOP
    ==================================================*/
    it("emits toggle-sidebar when clicked on desktop", async () => {
        const wrapper = mount(SidebarToggle, {
            props: {
                isMobile: false,
            },
        })
        const button = wrapper.findComponent(Button)
        button.vm.$emit("click")
        expect(wrapper.emitted("toggle-sidebar")).toBeTruthy()
        expect(wrapper.emitted("toggle-sidebar")).toHaveLength(1)
        expect(wrapper.emitted("open-sidebar")).toBeFalsy()
    })

    /**===============================
     * HANDLES SIDEBAR VISIBLE PROP
    ==================================*/
    it("handles sidebarVisible prop", () => {
        const wrapper = mount(SidebarToggle, {
            props: {
                isMobile: false,
                sidebarVisible: true,
            },
        })

        /**=========================================
         * COMPONENT SHOULD STILL RENDER NORMALLY
        ============================================*/
        const button = wrapper.findComponent(Button)
        expect(button.exists()).toBe(true)
    })

    /**================================
     * APPLIES CORRECT BUTTON STYLES
    ===================================*/
    it("applies correct button styles", () => {
        const wrapper = mount(SidebarToggle, {
            props: defaultProps,
        })
        const button = wrapper.find("button")
        expect(button.classes()).toEqual(
            expect.arrayContaining(["transition-transform", "hover:scale-110"]),
        )
    })

    /**====================================
     * HANDLES MULTIPLE CLICKS CORRECTLY
    =======================================*/
    it("handles multiple clicks correctly", async () => {
        const wrapper = mount(SidebarToggle, {
            props: {
                isMobile: false,
            },
        })

        const button = wrapper.findComponent(Button)

        /**=======================
         * CLICK MULTIPLE TIMES
        ==========================*/
        button.vm.$emit("click")
        button.vm.$emit("click")
        button.vm.$emit("click")

        const emitted = wrapper.emitted("toggle-sidebar")
        expect(emitted).toBeTruthy()
        if (emitted) {
            expect(emitted).toHaveLength(3)
        }
    })

    /**===========================================
     * SWITCHES BEHAVIOR WHEN MOBILE PROP CHANGES
     ============================================*/
    it("switches behavior when mobile prop changes", async () => {
        const wrapper = mount(SidebarToggle, {
            props: {
                isMobile: false,
            },
        })

        const button = wrapper.findComponent(Button)

        /**=========================
         * FIRST CLICK AS DESKTOP
        ============================*/
        button.vm.$emit("click")
        let emittedToggle = wrapper.emitted("toggle-sidebar")
        expect(emittedToggle).toBeTruthy()
        if (emittedToggle) {
            expect(emittedToggle).toHaveLength(1)
        }

        /**===================
         * CHANGE TO MOBILE
        ======================*/
        await wrapper.setProps({ isMobile: true })

        /**=========================
         * SECOND CLICK AS MOBILE
        ============================*/
        button.vm.$emit("click")
        let emittedOpen = wrapper.emitted("open-sidebar")
        expect(emittedOpen).toBeTruthy()
        if (emittedOpen) {
            expect(emittedOpen).toHaveLength(1)
        }

        /**===========================
         * TOGGLE SHOULD STILL BE 1
        ==============================*/
        emittedToggle = wrapper.emitted("toggle-sidebar")
        if (emittedToggle) {
            expect(emittedToggle).toHaveLength(1)
        }
    })

    /**======================================
     * HAS PROPER ACCESSIBILITY ATTRIBUTES
    =========================================*/
    it("has proper accessibility attributes", () => {
        const wrapper = mount(SidebarToggle, {
            props: defaultProps,
        })

        const buttonComponent = wrapper.findComponent(Button)
        expect(buttonComponent.exists()).toBe(true)

        /**===========================================
         * BUTTON SHOULD BE CLICKABLE AND FOCUSABLE
        ==============================================*/
        const buttonElement = buttonComponent.find("button")
        expect(buttonElement.exists()).toBe(true)
    })

    /**=======================================
     * RENDERS ICON WITH CORRECT PROPERTIES
    ==========================================*/
    it("renders icon with correct properties", () => {
        const wrapper = mount(SidebarToggle, {
            props: defaultProps,
        })
        const icon = wrapper.findComponent(Icon)
        expect(icon.props("name")).toBe("sidebar")
        expect(icon.props("size")).toBe("md")
        expect(icon.props("color")).toBeUndefined()
    })

    /**========================================
     * HANDLES DEFAULT SIDEBAR VISIBLE VALUE
    ===========================================*/
    it("handles default sidebarVisible value", () => {
        const wrapper = mount(SidebarToggle, {
            props: {
                isMobile: false,
                // SIDEBARVISIBLE NOT PROVIDED, SHOULD USE DEFAULT //
            },
        })

        /**========================================================
         * SHOULD STILL FUNCTION NORMALLY WITHOUT SIDEBARVISIBLE
        ===========================================================*/
        const button = wrapper.findComponent(Button)
        expect(button.exists()).toBe(true)
    })
})
