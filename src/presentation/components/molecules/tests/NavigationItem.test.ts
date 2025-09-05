import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { createRouter, createMemoryHistory } from "vue-router"
import NavigationItem from "../NavigationItem.vue"
import Badge from "../../atoms/Badge.vue"
import Icon from "../../atoms/Icon.vue"

/**==========================
 * MOCK ROUTER FOR TESTING
=============================*/
const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: "/", component: { template: "<div>Home</div>" } },
        { path: "/products", component: { template: "<div>Products</div>" } },
    ],
})

describe("NavigationItem", () => {
    const defaultProps = {
        label: "Dashboard",
        icon: "home",
    }

    /**=============================================
     * RENDERS NAVIGATION ITEM WITH DEFAULT PROPS
    ================================================*/
    it("renders navigation item with default props", () => {
        const wrapper = mount(NavigationItem, {
            props: defaultProps,
            global: {
                plugins: [router],
            },
        })
        expect(wrapper.find("span").text()).toBe("Dashboard")
        expect(wrapper.findComponent(Icon).props("name")).toBe("home")
        expect(wrapper.find("a").exists()).toBe(true)
    })

    /**=========================================
     * RENDERS ROUTER LINK FOR INTERNAL PATHS
    ============================================*/
    it("renders router-link for internal paths", () => {
        const wrapper = mount(NavigationItem, {
            props: {
                ...defaultProps,
                href: "/products",
            },
            global: {
                plugins: [router],
                stubs: {
                    "router-link": true,
                },
            },
        })
        expect(wrapper.find("router-link-stub").exists()).toBe(true)
        expect(wrapper.find("a").exists()).toBe(false)
    })

    /**========================================
     * RENDERS ANCHOR TAG FOR EXTERNAL LINKS
    ===========================================*/
    it("renders anchor tag for external links", () => {
        const wrapper = mount(NavigationItem, {
            props: {
                ...defaultProps,
                href: "https://example.com",
            },
            global: {
                plugins: [router],
            },
        })
        expect(wrapper.find("a").exists()).toBe(true)
        expect(wrapper.find("router-link").exists()).toBe(false)
        expect(wrapper.find("a").attributes("href")).toBe("https://example.com")
    })

    /**===============================================
     * APPLIES ACTIVE STYLES WHEN IS ACTIVE IS TRUE
    ==================================================*/
    it("applies active styles when isActive is true", () => {
        const wrapper = mount(NavigationItem, {
            props: {
                ...defaultProps,
                isActive: true,
            },
            global: {
                plugins: [router],
            },
        })
        const link = wrapper.find("a")
        expect(link.classes()).toContain("bg-gray-200")
    })

    /**==================================================
     * APPLIES INACTIVE STYLES WHEN IS ACTIVE IS FALSE
    =====================================================*/
    it("applies inactive styles when isActive is false", () => {
        const wrapper = mount(NavigationItem, {
            props: {
                ...defaultProps,
                isActive: false,
            },
            global: {
                plugins: [router],
            },
        })
        const link = wrapper.find("a")
        expect(link.classes()).toContain("text-gray-700")
        expect(link.classes()).toContain("hover:bg-gray-200")
        expect(link.classes()).toContain("dark:text-gray-300")
        expect(link.classes()).toContain("dark:hover:bg-gray-700")
    })

    /**==========================================
     * RENDERS BADGE WHEN BAD PROP IS PROVIDED
    =============================================*/
    it("renders badge when badge prop is provided", () => {
        const badgeProps = {
            count: 5,
            variant: "red" as const,
        }
        const wrapper = mount(NavigationItem, {
            props: {
                ...defaultProps,
                badge: badgeProps,
            },
            global: {
                plugins: [router],
            },
        })
        const badge = wrapper.findComponent(Badge)
        expect(badge.exists()).toBe(true)
        expect(badge.props("count")).toBe(5)
        expect(badge.props("variant")).toBe("red")
        // BADGE SHOULD BE RENDERED (THE CLASS IS APPLIED IN THE TEMPLATE)//
    })

    /**========================================================
     * DOES NOT RENDER BADGE WHEN BADGE PROP IS NOT PROVIDED
    ===========================================================*/
    it("does not render badge when badge prop is not provided", () => {
        const wrapper = mount(NavigationItem, {
            props: defaultProps,
            global: {
                plugins: [router],
            },
        })
        const badge = wrapper.findComponent(Badge)
        expect(badge.exists()).toBe(false)
    })

    /**=================================
     * EMITS CLICK EVENT WHEN CLICKED
    ====================================*/
    it("emits click event when clicked", async () => {
        const wrapper = mount(NavigationItem, {
            props: defaultProps,
            global: {
                plugins: [router],
            },
        })
        await wrapper.find("a").trigger("click")
        expect(wrapper.emitted("click")).toBeTruthy()
        expect(wrapper.emitted("click")).toHaveLength(1)
    })

    /**==============================
     * APPLIES CORRECT CSS CLASSES
    =================================*/
    it("applies correct CSS classes", () => {
        const wrapper = mount(NavigationItem, {
            props: defaultProps,
            global: {
                plugins: [router],
            },
        })
        const link = wrapper.find("a")
        const expectedClasses = [
            "flex",
            "items-center",
            "space-x-3",
            "px-3",
            "py-2",
            "rounded-lg",
            "font-semibold",
            "transition-colors",
        ]
        expectedClasses.forEach(className => {
            expect(link.classes()).toContain(className)
        })
    })

    /**============================================
     * USES DEFAULT HREF VALUE WHEN NOT PROVIDED
    ===============================================*/
    it("uses default href value when not provided", () => {
        const wrapper = mount(NavigationItem, {
            props: {
                label: "Test",
                icon: "test",
            },
            global: {
                plugins: [router],
            },
        })
        const link = wrapper.find("a")
        expect(link.attributes("href")).toBe("#")
    })

    /**==================================
     * RENDERS ICON WITH CORRECT PROPS
    =====================================*/
    it("renders icon with correct props", () => {
        const wrapper = mount(NavigationItem, {
            props: {
                ...defaultProps,
                icon: "star",
            },
            global: {
                plugins: [router],
            },
        })
        const icon = wrapper.findComponent(Icon)
        expect(icon.exists()).toBe(true)
        expect(icon.props("name")).toBe("star")
    })

    /**============================
     * HAS PROPER LIST STRUCTURE
    ===============================*/
    it("has proper list structure", () => {
        const wrapper = mount(NavigationItem, {
            props: defaultProps,
            global: {
                plugins: [router],
            },
        })
        expect(wrapper.find("ul").exists()).toBe(true)
        expect(wrapper.find("li").exists()).toBe(true)
    })
})
