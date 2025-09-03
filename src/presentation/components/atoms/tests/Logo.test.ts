import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Logo from "../Logo.vue"

describe("Logo", () => {
    /**=============================
   * RENDERS WITH DEFAULT PROPS
  ================================*/
    it("renders with default props", () => {
        const wrapper = mount(Logo)
        const section = wrapper.find("section")
        const span = wrapper.find("span")
        expect(section.exists()).toBe(true)
        expect(span.exists()).toBe(true)
        expect(span.text()).toBe("M")
    })

    /**=============================
   * RENDERS WITH CUSTOM LETTER
  ================================*/
    it("renders with custom letter", () => {
        const wrapper = mount(Logo, {
            props: {
                letter: "A",
            },
        })
        const span = wrapper.find("span")
        expect(span.text()).toBe("A")
    })

    /**====================================
   * APPLIES DEFAULT SIZE CLASSES (MD)
  =======================================*/
    it("applies default size classes (md)", () => {
        const wrapper = mount(Logo)
        const section = wrapper.find("section")
        expect(section.classes()).toContain("w-10")
        expect(section.classes()).toContain("h-10")
        expect(section.classes()).toContain("text-sm")
    })

    /**=============================
   * APPLIES SMALL SIZE CLASSES
  ================================*/
    it("applies small size classes", () => {
        const wrapper = mount(Logo, {
            props: {
                size: "sm",
            },
        })
        const section = wrapper.find("section")
        expect(section.classes()).toContain("w-6")
        expect(section.classes()).toContain("h-6")
        expect(section.classes()).toContain("text-xs")
    })

    /**=============================
   * APPLIES LARGE SIZE CLASSES
  ================================*/
    it("applies large size classes", () => {
        const wrapper = mount(Logo, {
            props: {
                size: "lg",
            },
        })
        const section = wrapper.find("section")
        expect(section.classes()).toContain("w-12")
        expect(section.classes()).toContain("h-12")
        expect(section.classes()).toContain("text-base")
    })

    /**======================================
   * ALWAYS APPLIES BASE SECTION CLASSES
  =========================================*/
    it("always applies base section classes", () => {
        const wrapper = mount(Logo)
        const section = wrapper.find("section")
        expect(section.classes()).toContain("bg-black")
        expect(section.classes()).toContain("rounded-xl")
        expect(section.classes()).toContain("flex")
        expect(section.classes()).toContain("items-center")
        expect(section.classes()).toContain("justify-center")
    })

    /**===================================
   * ALWAYS APPLIES BASE SPAN CLASSES
  ======================================*/
    it("always applies base span classes", () => {
        const wrapper = mount(Logo)
        const span = wrapper.find("span")
        expect(span.classes()).toContain("text-gray-100")
        expect(span.classes()).toContain("font-bold")
    })

    /**===================================
   * HANDLES SINGLE CHARACTER LETTERS
  ======================================*/
    it("handles single character letters", () => {
        const wrapper = mount(Logo, {
            props: {
                letter: "X",
            },
        })
        const span = wrapper.find("span")
        expect(span.text()).toBe("X")
    })

    /**=======================================
   * HANDLES EMPTY LETTER PROP GRACEFULLY
  ==========================================*/
    it("handles empty letter prop gracefully", () => {
        const wrapper = mount(Logo, {
            props: {
                letter: "",
            },
        })
        const span = wrapper.find("span")
        expect(span.text()).toBe("")
    })

    /**=====================================
   * HANDLES MULTIPLE CHARACTER LETTERS
  ========================================*/
    it("handles multiple character letters", () => {
        const wrapper = mount(Logo, {
            props: {
                letter: "AB",
            },
        })
        const span = wrapper.find("span")
        expect(span.text()).toBe("AB")
    })
})
