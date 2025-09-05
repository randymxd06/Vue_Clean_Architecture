import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Breadcrumb from "../Breadcrumb.vue"
import { Icon } from "../../index"

describe("Breadcrumb", () => {
    const mockItems = [
        { label: "Home", active: false },
        { label: "Products", active: false },
        { label: "Details", active: true },
    ]

    /**================================
     * RENDERS BREADCRUMB WITH ITEMS
    ===================================*/
    it("renders breadcrumb with items", () => {
        const wrapper = mount(Breadcrumb, {
            props: {
                items: mockItems,
            },
        })
        const nav = wrapper.find("nav")
        expect(nav.exists()).toBe(true)
        expect(nav.classes()).toEqual(
            expect.arrayContaining(["hidden", "md:flex", "items-center", "space-x-2"]),
        )
        const spans = wrapper.findAll("span")
        expect(spans).toHaveLength(3)
        expect(spans[0].text()).toBe("Home")
        expect(spans[1].text()).toBe("Products")
        expect(spans[2].text()).toBe("Details")
    })

    /**===================================
     * RENDERS SEPARATORS BETWEEN ITEMS
    ======================================*/
    it("renders separators between items", () => {
        const wrapper = mount(Breadcrumb, {
            props: {
                items: mockItems,
            },
        })

        const icons = wrapper.findAllComponents(Icon)

        /**=======================================
         * SHOULD HAVE 2 SEPARATORS FOR 3 ITEMS
        ==========================================*/
        expect(icons).toHaveLength(2)

        icons.forEach(icon => {
            expect(icon.props("name")).toBe("chevron-right")
            expect(icon.props("size")).toBe("sm")
            expect(icon.props("color")).toBe("#9CA3AF")
        })
    })

    /**========================================
     * APPLIES ACTIVE STYLES TO ACTIVE ITEMS
    ===========================================*/
    it("applies active styles to active items", () => {
        const wrapper = mount(Breadcrumb, {
            props: {
                items: mockItems,
            },
        })

        const spans = wrapper.findAll("span")

        /**=====================================
         * FIRST TWO ITEMS SHOULD BE INACTIVE
        ========================================*/
        expect(spans[0].classes()).toEqual(
            expect.arrayContaining(["text-sm", "text-gray-500", "dark:text-gray-500"]),
        )
        expect(spans[1].classes()).toEqual(
            expect.arrayContaining(["text-sm", "text-gray-500", "dark:text-gray-500"]),
        )

        /**=============================
         * LAST ITEM SHOULD BE ACTIVE
        ================================*/
        expect(spans[2].classes()).toEqual(
            expect.arrayContaining([
                "text-sm",
                "text-gray-900",
                "dark:text-gray-400",
                "font-medium",
            ]),
        )
    })

    /**=================================
     * HANDLES SINGLE ITEM BREADCRUMB
    ====================================*/
    it("handles single item breadcrumb", () => {
        const singleItem = [{ label: "Home", active: true }]
        const wrapper = mount(Breadcrumb, {
            props: {
                items: singleItem,
            },
        })
        const spans = wrapper.findAll("span")
        expect(spans).toHaveLength(1)
        expect(spans[0].text()).toBe("Home")
        const icons = wrapper.findAllComponents(Icon)
        expect(icons).toHaveLength(0) // NO SEPARATORS FOR SINGLE ITEM //
    })

    /**============================
     * HANDLES EMPTY ITEMS ARRAY
    ===============================*/
    it("handles empty items array", () => {
        const wrapper = mount(Breadcrumb, {
            props: {
                items: [],
            },
        })
        const nav = wrapper.find("nav")
        expect(nav.exists()).toBe(true)
        const spans = wrapper.findAll("span")
        expect(spans).toHaveLength(0)
        const icons = wrapper.findAllComponents(Icon)
        expect(icons).toHaveLength(0)
    })

    /**===============================================
     * APPLIES RESPONSIVE CLASSES FOR MOBILE HIDING
    ==================================================*/
    it("applies responsive classes for mobile hiding", () => {
        const wrapper = mount(Breadcrumb, {
            props: {
                items: mockItems,
            },
        })
        const nav = wrapper.find("nav")
        expect(nav.classes()).toContain("hidden")
        expect(nav.classes()).toContain("md:flex")
    })

    /**====================================
     * HANDLES ITEMS WITHOUT ACTIVE FLAG
    =======================================*/
    it("handles items without active flag", () => {
        const itemsWithoutActive = [{ label: "Home" }, { label: "Products" }]

        const wrapper = mount(Breadcrumb, {
            props: {
                items: itemsWithoutActive,
            },
        })

        const spans = wrapper.findAll("span")
        expect(spans).toHaveLength(2)

        /**=====================================================================
         * ALL ITEMS SHOULD HAVE INACTIVE STYLES WHEN ACTIVE IS NOT SPECIFIED
        ========================================================================*/
        spans.forEach(span => {
            expect(span.classes()).toEqual(
                expect.arrayContaining(["text-sm", "text-gray-500", "dark:text-gray-500"]),
            )
        })
    })
})
