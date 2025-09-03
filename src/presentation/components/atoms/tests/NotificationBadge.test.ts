import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import NotificationBadge from "../NotificationBadge.vue"

describe("NotificationBadge", () => {
    /**=======================================================
   * DOES NOT RENDER WHEN COUNT IS 0 AND SHOWDOT IS FALSE
  ==========================================================*/
    it("does not render when count is 0 and showDot is false", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 0,
                showDot: false,
            },
        })
        const span = wrapper.find("span")
        expect(span.exists()).toBe(false)
    })

    /**=======================================
   * RENDERS WHEN COUNT IS GREATER THAN 0
  ==========================================*/
    it("renders when count is greater than 0", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 5,
            },
        })
        const span = wrapper.find("span")
        expect(span.exists()).toBe(true)
        expect(span.text()).toBe("5")
    })

    /**=================================================
   * RENDERS WHEN SHOWDOT IS TRUE EVEN WITH COUNT 0
  ====================================================*/
    it("renders when showDot is true even with count 0", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 0,
                showDot: true,
            },
        })
        const span = wrapper.find("span")
        expect(span.exists()).toBe(true)
        expect(span.text()).toBe("")
    })

    /**===============================================
   * DISPLAYS "99+" WHEN COUNT IS GREATER THAN 99
  ==================================================*/
    it('displays "99+" when count is greater than 99', () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 150,
            },
        })
        const span = wrapper.find("span")
        expect(span.text()).toBe("99+")
    })

    /**================================================
   * DISPLAYS EXACT COUNT WHEN COUNT IS 99 OR LESS
  ===================================================*/
    it("displays exact count when count is 99 or less", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 99,
            },
        })
        const span = wrapper.find("span")
        expect(span.text()).toBe("99")
    })

    /**========================================
   * APPLIES DEFAULT VARIANT CLASSES (RED)
  ===========================================*/
    it("applies default variant classes (red)", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 1,
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("bg-red-500")
    })

    /**===============================
   * APPLIES BLUE VARIANT CLASSES
  ==================================*/
    it("applies blue variant classes", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 1,
                variant: "blue",
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("bg-blue-500")
    })

    /**================================
   * APPLIES GREEN VARIANT CLASSES
  ===================================*/
    it("applies green variant classes", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 1,
                variant: "green",
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("bg-green-500")
    })

    /**=================================
   * APPLIES ORANGE VARIANT CLASSES
  ====================================*/
    it("applies orange variant classes", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 1,
                variant: "orange",
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("bg-orange-500")
    })

    /**================================================
   * APPLIES DOT SIZE CLASSES WHEN SHOWDOT IS TRUE
  ===================================================*/
    it("applies dot size classes when showDot is true", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                showDot: true,
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("w-2")
        expect(span.classes()).toContain("h-2")
        expect(span.classes()).toContain("-top-1")
        expect(span.classes()).toContain("-right-1")
    })

    /**==========================================================
   * APPLIES SMALL BADGE SIZE CLASSES FOR SINGLE DIGIT COUNT
  =============================================================*/
    it("applies small badge size classes for single digit count", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 5,
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("w-5")
        expect(span.classes()).toContain("h-5")
        expect(span.classes()).toContain("-top-2")
        expect(span.classes()).toContain("-right-2")
    })

    /**==========================================================
   * APPLIES LARGE BADGE SIZE CLASSES FOR DOUBLE DIGIT COUNT
  =============================================================*/
    it("applies large badge size classes for double digit count", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 15,
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("w-6")
        expect(span.classes()).toContain("h-6")
        expect(span.classes()).toContain("-top-2")
        expect(span.classes()).toContain("-right-2")
    })

    /**===========================================
   * ALWAYS APPLIES BASE CLASSES WHEN VISIBLE
  ==============================================*/
    it("always applies base classes when visible", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 1,
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("absolute")
        expect(span.classes()).toContain("flex")
        expect(span.classes()).toContain("items-center")
        expect(span.classes()).toContain("justify-center")
        expect(span.classes()).toContain("text-white")
        expect(span.classes()).toContain("text-xs")
        expect(span.classes()).toContain("font-bold")
        expect(span.classes()).toContain("rounded-full")
    })

    /**================================
   * HANDLES EDGE CASE OF COUNT 10
  ===================================*/
    it("handles edge case of count 10", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 10,
            },
        })
        const span = wrapper.find("span")
        expect(span.text()).toBe("10")
        expect(span.classes()).toContain("w-6")
        expect(span.classes()).toContain("h-6")
    })

    /**=================================
   * HANDLES EDGE CASE OF COUNT 100
  ====================================*/
    it("handles edge case of count 100", () => {
        const wrapper = mount(NotificationBadge, {
            props: {
                count: 100,
            },
        })
        const span = wrapper.find("span")
        expect(span.text()).toBe("99+")
    })
})
