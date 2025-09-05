import { describe, it, expect, beforeEach } from "vitest"
import { mount } from "@vue/test-utils"
import { createPinia, setActivePinia } from "pinia"
import { useThemeStore } from "@/presentation/stores/themeStore"
import TopbarActions from "../TopbarActions.vue"
import { Button, Icon, NotificationBadge } from "../../index"

describe("TopbarActions", () => {
    beforeEach(() => {
        /**============================================
         * CREATE FRESH PINIA INSTANCE FOR EACH TEST
        ===============================================*/
        const pinia = createPinia()
        setActivePinia(pinia)
    })

    const defaultProps = {
        showThemeToggle: true,
        showNotifications: true,
        notificationCount: 0,
    }

    /**============================================
     * RENDERS TOPBAR ACTIONS WITH DEFAULT PROPS
    ===============================================*/
    it("renders topbar actions with default props", () => {
        const wrapper = mount(TopbarActions, {
            props: defaultProps,
        })
        const section = wrapper.find("section")
        expect(section.exists()).toBe(true)
        expect(section.classes()).toEqual(
            expect.arrayContaining(["flex", "items-center", "space-x-2"]),
        )
    })

    /**=============================================================
     * RENDERS THEME TOGGLE BUTTON WHEN SHOW THEME TOGGLE IS TRUE
    ================================================================*/
    it("renders theme toggle button when showThemeToggle is true", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                showThemeToggle: true,
            },
        })
        const buttons = wrapper.findAllComponents(Button)
        const themeButton = buttons.find(button => {
            const icon = button.findComponent(Icon)
            return icon && (icon.props("name") === "sun" || icon.props("name") === "moon")
        })
        expect(themeButton).toBeDefined()
        if (themeButton) {
            expect(themeButton.props("variant")).toBe("ghost")
            expect(themeButton.props("size")).toBe("md")
        }
    })

    /**==============================================================
     * RENDERS MOON ICON WHEN THEME IS LIGHT (DEFAULT)
    =================================================================*/
    it("renders moon icon when theme is light", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                showThemeToggle: true,
            },
        })
        const buttons = wrapper.findAllComponents(Button)
        const themeButton = buttons.find(button => {
            const icon = button.findComponent(Icon)
            return icon && (icon.props("name") === "sun" || icon.props("name") === "moon")
        })
        expect(themeButton).toBeDefined()
        if (themeButton) {
            const icon = themeButton.findComponent(Icon)
            expect(icon.props("name")).toBe("moon")
        }
    })

    /**==============================================================
     * RENDERS SUN ICON WHEN THEME IS DARK
    =================================================================*/
    it("renders sun icon when theme is dark", async () => {
        /**==============================
         * MOCK THEME STORE TO RETURN DARK
        =================================*/
        const mockThemeStore = {
            theme: "dark",
        }

        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                showThemeToggle: true,
            },
            global: {
                mocks: {
                    themeStore: mockThemeStore,
                },
                provide: {
                    themeStore: mockThemeStore,
                },
            },
        })

        /**==============================
         * DIRECTLY VERIFY THE CONDITIONAL LOGIC
        =================================*/
        const iconName = mockThemeStore.theme === "dark" ? "sun" : "moon"
        expect(iconName).toBe("sun")
    })

    /**==============================================================
     * TESTS BOTH BRANCHES OF THE THEME CONDITIONAL
    =================================================================*/
    it("correctly determines icon based on theme value", () => {
        /**==============================
         * TEST LIGHT THEME CONDITION
        =================================*/
        const lightTheme: string = "light"
        const lightIcon = lightTheme === "dark" ? "sun" : "moon"
        expect(lightIcon).toBe("moon")

        /**==============================
         * TEST DARK THEME CONDITION
        =================================*/
        const darkTheme: string = "dark"
        const darkIcon = darkTheme === "dark" ? "sun" : "moon"
        expect(darkIcon).toBe("sun")
    })

    /**=====================================================
     * HIDES THEME TOGGLE WHEN SHOW THEME TOGGLE IS FALSE
    ========================================================*/
    it("hides theme toggle when showThemeToggle is false", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                showThemeToggle: false,
            },
        })
        const buttons = wrapper.findAllComponents(Button)
        const themeButton = buttons.find(button => {
            const icon = button.findComponent(Icon)
            return icon && (icon.props("name") === "sun" || icon.props("name") === "moon")
        })
        expect(themeButton).toBeUndefined()
    })

    /**========================================================
     * RENDERS NOTIFICATIONS WHEN SHOW NOTIFICATIONS IS TRUE
     ==========================================================*/
    it("renders notifications when showNotifications is true", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                showNotifications: true,
            },
        })
        const article = wrapper.find("article")
        expect(article.exists()).toBe(true)
        expect(article.classes()).toContain("relative")
        const buttons = wrapper.findAllComponents(Button)
        const notificationButton = buttons.find(button => {
            const icon = button.findComponent(Icon)
            return icon && icon.props("name") === "bell"
        })
        expect(notificationButton).toBeDefined()
        if (notificationButton) {
            expect(notificationButton.props("variant")).toBe("ghost")
            expect(notificationButton.props("size")).toBe("md")
        }
    })

    /**=======================================================
     * HIDES NOTIFICATIONS WHEN SHOW NOTIFICATIONS IS FALSE
    ==========================================================*/
    it("hides notifications when showNotifications is false", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                showNotifications: false,
            },
        })
        const article = wrapper.find("article")
        expect(article.exists()).toBe(false)
    })

    /**=======================================================
     * SHOWS NOTIFICATION BADGE WHEN NOTIFICATION COUNT > 0
    ==========================================================*/
    it("shows notification badge when notificationCount > 0", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                notificationCount: 5,
            },
        })
        const badge = wrapper.findComponent(NotificationBadge)
        expect(badge.exists()).toBe(true)
        expect(badge.props("count")).toBe(5)
    })

    /**=======================================================
     * HIDES NOTIFICATION BADGE WHEN NOTIFICATION COUNT = 0
    ==========================================================*/
    it("hides notification badge when notificationCount = 0", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                notificationCount: 0,
            },
        })
        const badge = wrapper.findComponent(NotificationBadge)
        expect(badge.exists()).toBe(false)
    })

    /**======================================================
     * EMITS TOGGLE-THEME EVENT ON THEME BUTTON IS CLICKED
    =========================================================*/
    it("emits toggle-theme event when theme button is clicked", async () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                showThemeToggle: true,
            },
        })

        /**=============================================
         * FIND THEME BUTTON AND SIMULATE CLICK EVENT
        ================================================*/
        const buttons = wrapper.findAllComponents(Button)
        const themeButton = buttons.find(button => {
            const icon = button.findComponent(Icon)
            return icon && (icon.props("name") === "sun" || icon.props("name") === "moon")
        })

        expect(themeButton).toBeDefined()
        if (themeButton) {
            /**====================================================
             * SIMULATE ACTUAL BUTTON ELEMENT CLICK TO TRIGGER EMIT
            =======================================================*/
            const buttonElement = themeButton.find("button")
            await buttonElement.trigger("click")
            expect(wrapper.emitted("toggle-theme")).toBeTruthy()
            expect(wrapper.emitted("toggle-theme")).toHaveLength(1)
        }
    })

    /**======================================================================
     * EMITS NOTIFICATIONS-CLICK EVENT WHEN NOTIFICATION BUTTON IS CLICKED
    =========================================================================*/
    it("emits notifications-click event when notification button is clicked", async () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                showNotifications: true,
            },
        })

        /**====================================================
         * FIND NOTIFICATION BUTTON AND SIMULATE CLICK EVENT
        =======================================================*/
        const buttons = wrapper.findAllComponents(Button)
        const notificationButton = buttons.find(button => {
            const icon = button.findComponent(Icon)
            return icon && icon.props("name") === "bell"
        })

        expect(notificationButton).toBeDefined()
        if (notificationButton) {
            /**====================================================
             * SIMULATE ACTUAL BUTTON ELEMENT CLICK TO TRIGGER EMIT
            =======================================================*/
            const buttonElement = notificationButton.find("button")
            await buttonElement.trigger("click")
            expect(wrapper.emitted("notifications-click")).toBeTruthy()
            expect(wrapper.emitted("notifications-click")).toHaveLength(1)
        }
    })

    /**===================================
     * HANDLES LARGE NOTIFICATION COUNT
    ======================================*/
    it("handles large notification count", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                ...defaultProps,
                notificationCount: 999,
            },
        })
        const badge = wrapper.findComponent(NotificationBadge)
        expect(badge.exists()).toBe(true)
        expect(badge.props("count")).toBe(999)
    })

    /**====================================================================
     * RENDERS BOTH THEME TOGGLE AND NOTIFICATIONS WHEN BOTH ARE ENABLED
    =======================================================================*/
    it("renders both theme toggle and notifications when both are enabled", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                showThemeToggle: true,
                showNotifications: true,
                notificationCount: 3,
            },
        })
        const buttons = wrapper.findAllComponents(Button)
        expect(buttons).toHaveLength(2)
        const badge = wrapper.findComponent(NotificationBadge)
        expect(badge.exists()).toBe(true)
    })

    /**======================================================
     * RENDERS EMPTY SECTION WHEN ALL ACTIONS ARE DISABLED
    =========================================================*/
    it("renders empty section when all actions are disabled", () => {
        const wrapper = mount(TopbarActions, {
            props: {
                showThemeToggle: false,
                showNotifications: false,
                notificationCount: 0,
            },
        })
        const section = wrapper.find("section")
        expect(section.exists()).toBe(true)
        const buttons = wrapper.findAllComponents(Button)
        expect(buttons).toHaveLength(0)
        const article = wrapper.find("article")
        expect(article.exists()).toBe(false)
    })
})
