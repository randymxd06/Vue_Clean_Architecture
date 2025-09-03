import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Avatar from "../Avatar.vue"

describe("Avatar", () => {
    /**==============================
   * RENDERS WITH REQUIRED PROPS
  =================================*/
    it("renders with required props", () => {
        const wrapper = mount(Avatar, {
            props: {
                src: "https://example.com/avatar.jpg",
                alt: "User Avatar",
            },
        })
        const img = wrapper.find("img")
        expect(img.exists()).toBe(true)
        expect(img.attributes("src")).toBe("https://example.com/avatar.jpg")
        expect(img.attributes("alt")).toBe("User Avatar")
    })

    /**====================================
   * APPLIES DEFAULT SIZE CLASSES (MD)
  =======================================*/
    it("applies default size classes (md)", () => {
        const wrapper = mount(Avatar, {
            props: {
                src: "https://example.com/avatar.jpg",
                alt: "User Avatar",
            },
        })
        const img = wrapper.find("img")
        expect(img.classes()).toContain("w-8")
        expect(img.classes()).toContain("h-8")
    })

    /**=============================================
   * APPLIES SMALL SIZE CLASSES WHEN SIZE IS SM
  ================================================*/
    it("applies small size classes when size is sm", () => {
        const wrapper = mount(Avatar, {
            props: {
                src: "https://example.com/avatar.jpg",
                alt: "User Avatar",
                size: "sm",
            },
        })
        const img = wrapper.find("img")
        expect(img.classes()).toContain("w-6")
        expect(img.classes()).toContain("h-6")
    })

    /**=============================================
   * APPLIES LARGE SIZE CLASSES WHEN SIZE IS LG
  ================================================*/
    it("applies large size classes when size is lg", () => {
        const wrapper = mount(Avatar, {
            props: {
                src: "https://example.com/avatar.jpg",
                alt: "User Avatar",
                size: "lg",
            },
        })
        const img = wrapper.find("img")
        expect(img.classes()).toContain("w-12")
        expect(img.classes()).toContain("h-12")
    })

    /**==============================
   * ALWAYS APPLIES BASE CLASSES
  =================================*/
    it("always applies base classes", () => {
        const wrapper = mount(Avatar, {
            props: {
                src: "https://example.com/avatar.jpg",
                alt: "User Avatar",
            },
        })
        const img = wrapper.find("img")
        expect(img.classes()).toContain("rounded-full")
        expect(img.classes()).toContain("object-cover")
    })
})
