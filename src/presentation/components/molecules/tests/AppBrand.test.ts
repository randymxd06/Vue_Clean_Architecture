import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import AppBrand from "../AppBrand.vue"
import Logo from "../../atoms/Logo.vue"

describe("AppBrand", () => {
    /**=======================================
     * RENDERS APP BRAND WITH DEFAULT PROPS
    ==========================================*/
    it("renders app brand with default props", () => {
        const wrapper = mount(AppBrand)
        expect(wrapper.find("h1").text()).toBe("Mi Aplicación")
        expect(wrapper.find("p").text()).toBe("Versión 2.0")
        expect(wrapper.findComponent(Logo).exists()).toBe(true)
    })

    /**======================================
     * RENDERS APP BRAND WITH CUSTOM PROPS
    =========================================*/
    it("renders app brand with custom props", () => {
        const customProps = {
            appName: "Custom App",
            version: "v3.1",
            logoLetter: "C",
        }
        const wrapper = mount(AppBrand, {
            props: customProps,
        })
        expect(wrapper.find("h1").text()).toBe("Custom App")
        expect(wrapper.find("p").text()).toBe("v3.1")
        const logoComponent = wrapper.findComponent(Logo)
        expect(logoComponent.exists()).toBe(true)
        expect(logoComponent.props("letter")).toBe("C")
    })

    /**==============================
     * APPLIES CORRECT CSS CLASSES
    =================================*/
    it("applies correct CSS classes", () => {
        const wrapper = mount(AppBrand)
        const section = wrapper.find("section")
        expect(section.classes()).toEqual(
            expect.arrayContaining(["flex", "items-center", "space-x-2"]),
        )
        const title = wrapper.find("h1")
        expect(title.classes()).toEqual(
            expect.arrayContaining(["font-semibold", "dark:text-gray-200"]),
        )
        const version = wrapper.find("p")
        expect(version.classes()).toEqual(
            expect.arrayContaining(["text-xs", "font-semibold", "dark:text-gray-400"]),
        )
    })

    /**=======================================
     * PASSES LOGO LETTER TO LOGO COMPONENT
    ==========================================*/
    it("passes logo letter to Logo component", () => {
        const wrapper = mount(AppBrand, {
            props: {
                logoLetter: "T",
            },
        })
        const logoComponent = wrapper.findComponent(Logo)
        expect(logoComponent.props("letter")).toBe("T")
    })

    /**================================
     * HAS PROPER SEMANTIC STRUCTURE
    ===================================*/
    it("has proper semantic structure", () => {
        const wrapper = mount(AppBrand)
        expect(wrapper.find("section").exists()).toBe(true)
        expect(wrapper.find("article").exists()).toBe(true)
        expect(wrapper.find("h1").exists()).toBe(true)
        expect(wrapper.find("p").exists()).toBe(true)
    })
})
