import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Button from "../Button.vue"

describe("Button", () => {
    /**====================================
   * RENDERS BUTTON WITH DEFAULT PROPS
  =======================================*/
    it("renders button with default props", () => {
        const wrapper = mount(Button, {
            slots: {
                default: "Click me",
            },
        })
        const button = wrapper.find("button")
        expect(button.exists()).toBe(true)
        expect(button.text()).toBe("Click me")
        expect(button.attributes("type")).toBe("button")
        expect(button.attributes("disabled")).toBeUndefined()
    })

    /**====================================================
   * APPLIES DEFAULT AND CUSTOM CLASSES BASED ON PROPS
  =======================================================*/
    it("applies default variant classes (primary)", () => {
        const wrapper = mount(Button)
        const button = wrapper.find("button")
        expect(button.classes()).toContain("bg-blue-600")
        expect(button.classes()).toContain("text-white")
    })

    /**====================================
   * APPLIES SECONDARY VARIANT CLASSES
  =======================================*/
    it("applies secondary variant classes", () => {
        const wrapper = mount(Button, {
            props: {
                variant: "secondary",
            },
        })
        const button = wrapper.find("button")
        expect(button.classes()).toContain("bg-gray-600")
        expect(button.classes()).toContain("text-white")
    })

    /**==================================
   * APPLIES OUTLINE VARIANT CLASSES
  =====================================*/
    it("applies outline variant classes", () => {
        const wrapper = mount(Button, {
            props: {
                variant: "outline",
            },
        })
        const button = wrapper.find("button")
        expect(button.classes()).toContain("border")
        expect(button.classes()).toContain("border-gray-300")
        expect(button.classes()).toContain("text-gray-700")
    })

    /**================================
   * APPLIES GHOST VARIANT CLASSES
  ===================================*/
    it("applies ghost variant classes", () => {
        const wrapper = mount(Button, {
            props: {
                variant: "ghost",
            },
        })
        const button = wrapper.find("button")
        expect(button.classes()).toContain("bg-transparent")
        expect(button.classes()).toContain("text-gray-700")
    })

    /**=================================
   * APPLIES DANGER VARIANT CLASSES
  ====================================*/
    it("applies danger variant classes", () => {
        const wrapper = mount(Button, {
            props: {
                variant: "danger",
            },
        })
        const button = wrapper.find("button")
        expect(button.classes()).toContain("bg-red-600")
        expect(button.classes()).toContain("text-white")
    })

    /**====================================
   * APPLIES DEFAULT SIZE CLASSES (md)
  =======================================*/
    it("applies default size classes (md)", () => {
        const wrapper = mount(Button)
        const button = wrapper.find("button")
        expect(button.classes()).toContain("px-3")
        expect(button.classes()).toContain("py-2")
        expect(button.classes()).toContain("text-sm")
    })

    /**=============================
   * APPLIES SMALL SIZE CLASSES
  ================================*/
    it("applies small size classes", () => {
        const wrapper = mount(Button, {
            props: {
                size: "sm",
            },
        })
        const button = wrapper.find("button")
        expect(button.classes()).toContain("px-2")
        expect(button.classes()).toContain("py-1")
        expect(button.classes()).toContain("text-xs")
    })

    /**=============================
   * APPLIES LARGE SIZE CLASSES
  ================================*/
    it("applies large size classes", () => {
        const wrapper = mount(Button, {
            props: {
                size: "lg",
            },
        })
        const button = wrapper.find("button")
        expect(button.classes()).toContain("px-4")
        expect(button.classes()).toContain("py-2")
        expect(button.classes()).toContain("text-base")
    })

    /**====================================================
   * APPLIES FULL WIDTH CLASSES WHEN fullWidth IS TRUE
  =======================================================*/
    it("applies full width classes when fullWidth is true", () => {
        const wrapper = mount(Button, {
            props: {
                fullWidth: true,
            },
        })
        const button = wrapper.find("button")
        expect(button.classes()).toContain("w-full")
    })

    /**=================================================
   * APPLIES DISABLED CLASSES WHEN DISABLED IS TRUE
  ====================================================*/
    it("applies disabled classes when disabled is true", () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true,
            },
        })
        const button = wrapper.find("button")
        expect(button.attributes("disabled")).toBe("")
        expect(button.classes()).toContain("opacity-50")
        expect(button.classes()).toContain("cursor-not-allowed")
    })

    /**===========================
   * SETS CORRECT BUTTON TYPE
  ==============================*/
    it("sets correct button type", () => {
        const wrapper = mount(Button, {
            props: {
                type: "submit",
            },
        })
        const button = wrapper.find("button")
        expect(button.attributes("type")).toBe("submit")
    })

    /**==================================================
   * EMITS CLICK EVENT WHEN CLICKED AND NOT DISABLED
  =====================================================*/
    it("emits click event when clicked and not disabled", async () => {
        const wrapper = mount(Button)
        const button = wrapper.find("button")
        await button.trigger("click")
        expect(wrapper.emitted("click")).toBeTruthy()
        expect(wrapper.emitted("click")).toHaveLength(1)
    })

    /**==========================================
   * DOES NOT EMIT CLICK EVENT WHEN DISABLED
  =============================================*/
    it("does not emit click event when disabled", async () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true,
            },
        })
        const button = wrapper.find("button")
        await button.trigger("click")
        expect(wrapper.emitted("click")).toBeFalsy()
    })

    /**====================================
   * PASSES CLICK EVENT OBJECT IN EMIT
  =======================================*/
    it("passes click event object in emit", async () => {
        const wrapper = mount(Button)
        const button = wrapper.find("button")
        await button.trigger("click")
        const emittedEvents = wrapper.emitted("click")
        expect(emittedEvents).toBeTruthy()
        if (emittedEvents) {
            expect(emittedEvents[0][0]).toBeInstanceOf(MouseEvent)
        }
    })

    /**==============================
   * ALWAYS APPLIES BASE CLASSES
  =================================*/
    it("always applies base classes", () => {
        const wrapper = mount(Button)
        const button = wrapper.find("button")
        expect(button.classes()).toContain("inline-flex")
        expect(button.classes()).toContain("items-center")
        expect(button.classes()).toContain("justify-center")
        expect(button.classes()).toContain("font-medium")
        expect(button.classes()).toContain("rounded-lg")
    })

    /**=======================
   * RENDERS SLOT CONTENT
  ==========================*/
    it("renders slot content", () => {
        const wrapper = mount(Button, {
            slots: {
                default: "<span>Custom Content</span>",
            },
        })
        expect(wrapper.html()).toContain("<span>Custom Content</span>")
    })
})
