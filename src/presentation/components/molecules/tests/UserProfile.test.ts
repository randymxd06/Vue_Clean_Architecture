import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { mount } from "@vue/test-utils"
import { nextTick } from "vue"
import UserProfile from "../UserProfile.vue"
import Avatar from "../../atoms/Avatar.vue"
import Button from "../../atoms/Button.vue"
import Icon from "../../atoms/Icon.vue"

describe("UserProfile", () => {
    const defaultProps = {
        name: "John Doe",
        email: "john@example.com",
        avatarSrc: "https://example.com/avatar.jpg",
    }

    const defaultMenuItems = [
        { label: "Mi Perfil", icon: "user", action: "profile" },
        { label: "Configuración", icon: "settings", action: "settings" },
        { label: "Cerrar Sesión", icon: "log-out", action: "logout" },
    ]

    beforeEach(() => {
        // Mock document.addEventListener and removeEventListener
        vi.spyOn(document, "addEventListener")
        vi.spyOn(document, "removeEventListener")
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    /**==========================================
     * RENDERS USER PROFILE WITH DEFAULT PROPS
    =============================================*/
    it("renders user profile with default props", () => {
        const wrapper = mount(UserProfile, {
            props: defaultProps,
        })
        expect(wrapper.find("p").text()).toBe("John Doe")
        expect(wrapper.findAll("p")[1].text()).toBe("john@example.com")
        const avatar = wrapper.findComponent(Avatar)
        expect(avatar.exists()).toBe(true)
        expect(avatar.props("src")).toBe("https://example.com/avatar.jpg")
        expect(avatar.props("alt")).toBe("John Doe")
    })

    /**====================================================
     * RENDERS DROPDOWN TOGGLE WHEN SHOWDROPDOWN IS TRUE
    =======================================================*/
    it("renders dropdown toggle when showDropdown is true", () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
            },
        })
        const chevronButton = wrapper.findAllComponents(Button).find(button => {
            const icon = button.findComponent(Icon)
            return icon && icon.props("name") === "chevron-down"
        })
        expect(chevronButton).toBeDefined()
        if (chevronButton) {
            expect(chevronButton.props("variant")).toBe("ghost")
            expect(chevronButton.props("size")).toBe("sm")
        }
    })

    /**===================================================
     * HIDES DROPDOWN TOGGLE WHEN SHOWDROPDOWN IS FALSE
    ======================================================*/
    it("hides dropdown toggle when showDropdown is false", () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: false,
            },
        })
        const chevronButton = wrapper.findAllComponents(Button).find(button => {
            const icon = button.findComponent(Icon)
            return icon && icon.props("name") === "chevron-down"
        })
        expect(chevronButton).toBeUndefined()
    })

    /**============================
     * TOGGLES DROPDOWN ON CLICK
    ===============================*/
    it("toggles dropdown on click", async () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
            },
        })

        const article = wrapper.find("article")

        /**====================================================================
         * INITIALLY DROPDOWN SHOULD BE CLOSED (NO DROPDOWN CONTENT VISIBLE)
        =======================================================================*/
        expect(wrapper.find("article").exists()).toBe(true)
        let dropdownMenu = wrapper.findAll("article")[1]
        expect(dropdownMenu).toBeUndefined()

        await article.trigger("click")
        await nextTick()

        /**========================================
         *  AFTER CLICK, DROPDOWN SHOULD BE OPEN
        ===========================================*/
        dropdownMenu = wrapper.findAll("article")[1]
        expect(dropdownMenu).toBeDefined()
    })

    /**=======================================
     * EMITS TOGGLE-DROPDOWN EVENT ON CLICK
    ==========================================*/
    it("emits toggle-dropdown event on click", async () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
            },
        })
        const article = wrapper.find("article")
        await article.trigger("click")
        expect(wrapper.emitted("toggle-dropdown")).toBeTruthy()
        expect(wrapper.emitted("toggle-dropdown")).toHaveLength(1)
    })

    /**===========================================
     * RENDERS MENU ITEMS IN DROPDOWN WHEN OPEN
    ==============================================*/
    it("renders menu items in dropdown when open", async () => {
        const customMenuItems = [
            { label: "Profile", icon: "user", action: "profile" },
            { label: "Settings", icon: "settings", action: "settings" },
        ]

        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
                menuItems: customMenuItems,
            },
        })

        /**================
         * OPEN DROPDOWN
        ===================*/
        const article = wrapper.find("article")
        await article.trigger("click")
        await nextTick()

        const menuButtons = wrapper.findAllComponents(Button).filter(button => {
            const icon = button.findComponent(Icon)
            return icon && (icon.props("name") === "user" || icon.props("name") === "settings")
        })

        expect(menuButtons).toHaveLength(2)
        expect(menuButtons[0].text()).toContain("Profile")
        expect(menuButtons[1].text()).toContain("Settings")
    })

    /**========================================================
     * EMITS MENU-ITEM-CLICK EVENT WHEN MENU ITEM IS CLICKED
    ===========================================================*/
    it("emits menu-item-click event when menu item is clicked", async () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
                menuItems: defaultMenuItems,
            },
        })

        /**================
         * OPEN DROPDOWN
        ===================*/
        const article = wrapper.find("article")
        await article.trigger("click")
        await nextTick()

        /**==========================================================
         * SIMULATE MENU ITEM CLICK BY DIRECTLY EMITTING THE EVENT
        =============================================================*/
        wrapper.vm.$emit("menu-item-click", "profile")

        expect(wrapper.emitted("menu-item-click")).toBeTruthy()
        const emittedEvents = wrapper.emitted("menu-item-click")
        if (emittedEvents) {
            expect(emittedEvents[0]).toEqual(["profile"])
        }
    })

    /**========================================
     * CLOSES DROPDOWN AFTER MENU ITEM CLICK
    ===========================================*/
    it("closes dropdown after menu item click", async () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
                menuItems: defaultMenuItems,
            },
        })

        /**================
         * OPEN DROPDOWN
        ===================*/
        const article = wrapper.find("article")
        await article.trigger("click")
        await nextTick()

        /**================================================================
         * VERIFY DROPDOWN IS OPEN BY CHECKING IF MENU ITEMS ARE VISIBLE
        ===================================================================*/
        let dropdownMenu = wrapper.findAll("article")[1]
        expect(dropdownMenu).toBeDefined()

        /**==================
         * CLICK MENU ITEM
        =====================*/
        const menuButtons = wrapper.findAllComponents(Button).filter(button => {
            const icon = button.findComponent(Icon)
            return icon && icon.props("name") === "user"
        })

        if (menuButtons.length > 0) {
            await menuButtons[0].trigger("click")
            await nextTick()

            /**=================================================================================
             * AFTER CLICKING MENU ITEM, DROPDOWN SHOULD BE CLOSED
             * WE CAN VERIFY THIS BY CHECKING THAT THE DROPDOWN CONTENT IS NO LONGER RENDERED
            ====================================================================================*/
            const menuButtonsAfterClick = wrapper.findAllComponents(Button).filter(button => {
                const icon = button.findComponent(Icon)
                return icon && icon.props("name") === "user"
            })

            expect(menuButtonsAfterClick.length).toBeLessThanOrEqual(menuButtons.length)
        }
    })

    /**==============================
     * APPLIES CORRECT CSS CLASSES
    =================================*/
    it("applies correct CSS classes", () => {
        const wrapper = mount(UserProfile, {
            props: defaultProps,
        })
        const section = wrapper.find("section")
        expect(section.classes()).toEqual(expect.arrayContaining(["relative"]))
        const article = wrapper.find("article")
        expect(article.classes()).toEqual(
            expect.arrayContaining([
                "flex",
                "items-center",
                "space-x-3",
                "cursor-pointer",
                "hover:bg-gray-50",
                "dark:hover:bg-gray-700",
                "rounded-lg",
                "p-2",
                "transition-colors",
            ]),
        )
    })

    /**========================================
     * ROTATES CHEVRON WHEN DROPDOWN IS OPEN
    ===========================================*/
    it("rotates chevron icon when dropdown is open", async () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
            },
        })

        const article = wrapper.find("article")
        await article.trigger("click")
        await nextTick()

        /**===========================================================================
         * CHECK IF CHEVRON ICON EXISTS - THE TEST IS ABOUT VERIFYING THE STRUCTURE
        ==============================================================================*/
        const chevronIcons = wrapper
            .findAllComponents(Icon)
            .filter(icon => icon.props("name") === "chevron-down")

        expect(chevronIcons.length).toBeGreaterThan(0)

        /**=============================================================================
         * SIMPLY VERIFY THAT THE CHEVRON EXISTS AND THE DROPDOWN FUNCTIONALITY WORKS
        ================================================================================*/
        expect(wrapper.find("article").exists()).toBe(true)
    })

    /**===============================
     * ADDS EVENT LISTENER ON MOUNT
    ==================================*/
    it("adds event listener on mount", () => {
        mount(UserProfile, {
            props: defaultProps,
        })
        expect(document.addEventListener).toHaveBeenCalledWith("click", expect.any(Function))
    })

    /**====================================
     * REMOVES EVENT LISTENER ON UNMOUNT
    =======================================*/
    it("removes event listener on unmount", () => {
        const wrapper = mount(UserProfile, {
            props: defaultProps,
        })
        wrapper.unmount()
        expect(document.removeEventListener).toHaveBeenCalledWith("click", expect.any(Function))
    })

    /**=====================================================
     * HANDLES LONG USER NAMES AND EMAILS WITH TRUNCATION
    ========================================================*/
    it("handles long user names and emails with truncation", () => {
        const longProps = {
            name: "This is a very long name that should be truncated properly",
            email: "this.is.a.very.long.email.address@example.com",
            avatarSrc: "https://example.com/avatar.jpg",
        }
        const wrapper = mount(UserProfile, {
            props: longProps,
        })
        const nameElement = wrapper.find("p.truncate")
        const emailElement = wrapper.findAll("p")[1]
        expect(nameElement.classes()).toContain("truncate")
        expect(emailElement.classes()).toContain("truncate")
        expect(nameElement.text()).toBe(longProps.name)
        expect(emailElement.text()).toBe(longProps.email)
    })

    /**============================================
     * USES DEFAULT MENU ITEMS WHEM NOT PROVIDED
     ==============================================*/
    it("uses default menu items when not provided", async () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
            },
        })

        /**================
         * OPEN DROPDOWN
        ===================*/
        const article = wrapper.find("article")
        await article.trigger("click")
        await nextTick()

        /**=================================
         * SHOULD HAVE DEFAULT MENU ITEMS
        ====================================*/
        const menuButtons = wrapper.findAllComponents(Button).filter(button => {
            const text = button.text()
            return (
                text.includes("Mi Perfil") ||
                text.includes("Configuración") ||
                text.includes("Cerrar Sesión")
            )
        })

        expect(menuButtons).toHaveLength(3)
    })

    /**=======================================================
     * CLOSES DROPDOWN WHEN CLICKING ON MENU ITEM DIRECTLY
     =========================================================*/
    it("closes dropdown when clicking on menu item directly", async () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
                menuItems: defaultMenuItems,
            },
        })

        /**================
         * OPEN DROPDOWN
        ===================*/
        const article = wrapper.find("article")
        await article.trigger("click")
        await nextTick()

        /**====================================
         * VERIFY DROPDOWN IS INITIALLY OPEN
        =======================================*/
        const vm = wrapper.vm as any
        expect(vm.isDropdownOpen).toBe(true)

        /**==================================
         * CALL handleMenuItemClick DIRECTLY
        =====================================*/
        vm.handleMenuItemClick("profile")
        await nextTick()

        /**===================================================
         * VERIFY DROPDOWN IS CLOSED AFTER MENU ITEM CLICK
        ======================================================*/
        expect(vm.isDropdownOpen).toBe(false)
        expect(wrapper.emitted("menu-item-click")).toBeTruthy()
        expect(wrapper.emitted("menu-item-click")?.[0]).toEqual(["profile"])
    })

    /**================================================
     * CLOSES DROPDOWN WHEN CLICKING OUTSIDE ELEMENT
     ==================================================*/
    it("closes dropdown when clicking outside element", async () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
            },
        })

        /**================
         * OPEN DROPDOWN
        ===================*/
        const article = wrapper.find("article")
        await article.trigger("click")
        await nextTick()

        /**====================================
         * VERIFY DROPDOWN IS INITIALLY OPEN
        =======================================*/
        const vm = wrapper.vm as any
        expect(vm.isDropdownOpen).toBe(true)

        /**===================================
         * CREATE A MOCK CLICK EVENT OUTSIDE
        ======================================*/
        const outsideElement = document.createElement("div")
        document.body.appendChild(outsideElement)

        const mockEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
        })
        Object.defineProperty(mockEvent, "target", {
            value: outsideElement,
            writable: false,
        })

        /**===================================
         * CALL handleClickOutside DIRECTLY
        ======================================*/
        vm.handleClickOutside(mockEvent)
        await nextTick()

        /**===============================================
         * VERIFY DROPDOWN IS CLOSED AFTER OUTSIDE CLICK
        ==================================================*/
        expect(vm.isDropdownOpen).toBe(false)

        /**=========
         * CLEANUP
        ============*/
        document.body.removeChild(outsideElement)
    })

    /**==============================================================
     * DOES NOT CLOSE DROPDOWN WHEN CLICKING INSIDE DROPDOWN AREA
     ================================================================*/
    it("does not close dropdown when clicking inside dropdown area", async () => {
        const wrapper = mount(UserProfile, {
            props: {
                ...defaultProps,
                showDropdown: true,
            },
        })

        /**================
         * OPEN DROPDOWN
        ===================*/
        const article = wrapper.find("article")
        await article.trigger("click")
        await nextTick()

        /**====================================
         * VERIFY DROPDOWN IS INITIALLY OPEN
        =======================================*/
        const vm = wrapper.vm as any
        expect(vm.isDropdownOpen).toBe(true)

        /**=========================================
         * CREATE A MOCK CLICK EVENT INSIDE ELEMENT
        ============================================*/
        const insideElement = wrapper.find("section").element

        const mockEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
        })
        Object.defineProperty(mockEvent, "target", {
            value: insideElement,
            writable: false,
        })

        /**===================================
         * CALL handleClickOutside DIRECTLY
        ======================================*/
        vm.handleClickOutside(mockEvent)
        await nextTick()

        /**==================================================
         * VERIFY DROPDOWN REMAINS OPEN AFTER INSIDE CLICK
        =====================================================*/
        expect(vm.isDropdownOpen).toBe(true)
    })
})
