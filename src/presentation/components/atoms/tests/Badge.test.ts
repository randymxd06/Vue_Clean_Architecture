import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Badge from "../Badge.vue"

describe("Badge", () => {
    /**==========================
   * RENDERS WITH COUNT PROP
  =============================*/
    it("renders with count prop", () => {
        const wrapper = mount(Badge, {
            props: {
                count: 5,
            },
        })
        expect(wrapper.text()).toBe("5")
    })

    /**=================================
   * RENDERS WITH STRING COUNT PROP
  ====================================*/
    it("renders with string count prop", () => {
        const wrapper = mount(Badge, {
            props: {
                count: "NEW",
            },
        })
        expect(wrapper.text()).toBe("NEW")
    })

    /**=============================================
   * APPLIES DEFAULT AND VARIANT CLASSES (BLUE)
  ================================================*/
    it("applies default variant classes (blue)", () => {
        const wrapper = mount(Badge, {
            props: {
                count: 1,
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("bg-blue-100")
        expect(span.classes()).toContain("text-blue-800")
    })

    /**==============================
   * APPLIES RED VARIANT CLASSES
  =================================*/
    it("applies red variant classes", () => {
        const wrapper = mount(Badge, {
            props: {
                count: 1,
                variant: "red",
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("bg-red-100")
        expect(span.classes()).toContain("text-red-800")
    })

    /**================================
   * APPLIES GREEN VARIANT CLASSES
  ===================================*/
    it("applies green variant classes", () => {
        const wrapper = mount(Badge, {
            props: {
                count: 1,
                variant: "green",
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("bg-green-100")
        expect(span.classes()).toContain("text-green-800")
    })

    /**===============================
   * APPLIES GRAY VARIANT CLASSES
  ==================================*/
    it("applies gray variant classes", () => {
        const wrapper = mount(Badge, {
            props: {
                count: 1,
                variant: "gray",
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("bg-gray-100")
        expect(span.classes()).toContain("text-gray-800")
    })

    /**==============================
   * ALWAYS APPLIES BASE CLASSES
  =================================*/
    it("always applies base classes", () => {
        const wrapper = mount(Badge, {
            props: {
                count: 1,
            },
        })
        const span = wrapper.find("span")
        expect(span.classes()).toContain("text-xs")
        expect(span.classes()).toContain("px-2")
        expect(span.classes()).toContain("py-1")
        expect(span.classes()).toContain("rounded-full")
        expect(span.classes()).toContain("font-medium")
    })

    /**=====================
   * HANDLES ZERO COUNT
  ========================*/
    it("handles zero count", () => {
        const wrapper = mount(Badge, {
            props: {
                count: 0,
            },
        })
        expect(wrapper.text()).toBe("0")
    })
})
