import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import SectionHeader from "../SectionHeader.vue"

describe("SectionHeader", () => {
    /**====================================
     * RENDERS SECTION HEADER WITH TITLE
    =======================================*/
    it("renders section header with title", () => {
        const wrapper = mount(SectionHeader, {
            props: {
                title: "Navigation",
            },
        })
        const paragraph = wrapper.find("p")
        expect(paragraph.text()).toBe("Navigation")
    })

    /**==============================
     * APPLIES CORRECT CSS CLASSES
    =================================*/
    it("applies correct CSS classes", () => {
        const wrapper = mount(SectionHeader, {
            props: {
                title: "Test Section",
            },
        })
        const section = wrapper.find("section")
        expect(section.classes()).toEqual(expect.arrayContaining(["px-4", "mb-2"]))
        const paragraph = wrapper.find("p")
        expect(paragraph.classes()).toEqual(
            expect.arrayContaining(["text-xs", "font-medium", "text-gray-500", "tracking-wide"]),
        )
    })

    /**===========================
     * RENDERS WITH EMPTY TITLE
    ==============================*/
    it("renders with empty title", () => {
        const wrapper = mount(SectionHeader, {
            props: {
                title: "",
            },
        })
        const paragraph = wrapper.find("p")
        expect(paragraph.exists()).toBe(true)
        expect(paragraph.text()).toBe("")
    })

    /**==========================
     * RENDERS WITH LONG TITLE
    =============================*/
    it("renders with long title", () => {
        const longTitle =
            "This is a very long section header title that should be displayed properly"
        const wrapper = mount(SectionHeader, {
            props: {
                title: longTitle,
            },
        })
        const paragraph = wrapper.find("p")
        expect(paragraph.text()).toBe(longTitle)
    })

    /**================================
     * HAS PROPER SEMANTIC STRUCTURE
    ===================================*/
    it("has proper semantic structure", () => {
        const wrapper = mount(SectionHeader, {
            props: {
                title: "Main Navigation",
            },
        })
        expect(wrapper.find("section").exists()).toBe(true)
        expect(wrapper.find("p").exists()).toBe(true)
    })

    /**======================================
     * HANDLES SPECIAL CHARACTERS IN TITLE
    =========================================*/
    it("handles special characters in title", () => {
        const specialTitle = "Main & Secondary Navigation - 2024"
        const wrapper = mount(SectionHeader, {
            props: {
                title: specialTitle,
            },
        })
        const paragraph = wrapper.find("p")
        expect(paragraph.text()).toBe(specialTitle)
    })

    /**============================================
     * RENDERS WITH ACCESSIBILITY CONSIDERATIONS
    ===============================================*/
    it("renders with accessibility considerations", () => {
        const wrapper = mount(SectionHeader, {
            props: {
                title: "Accessibility Section",
            },
        })

        const paragraph = wrapper.find("p")
        expect(paragraph.element.tagName).toBe("P")

        /**==================================================
         * VERIFY THE TEXT IS READABLE WITH PROPER STYLING
        =====================================================*/
        expect(paragraph.classes()).toContain("text-gray-500")
        expect(paragraph.classes()).toContain("font-medium")
    })

    /**==========================================================
     * MAINTAINS CONSISTENT STYLING REGARDLESS OF TITLE LENGTH
    =============================================================*/
    it("maintains consistent styling regardless of title length", () => {
        const shortTitle = "Nav"
        const longTitle = "Navigation Section with Multiple Words and More Content"

        const shortWrapper = mount(SectionHeader, { props: { title: shortTitle } })
        const longWrapper = mount(SectionHeader, { props: { title: longTitle } })

        /**====================================
         * BOTH SHOULD HAVE THE SAME CLASSES
        =======================================*/
        expect(shortWrapper.find("section").classes()).toEqual(
            longWrapper.find("section").classes(),
        )
        expect(shortWrapper.find("p").classes()).toEqual(longWrapper.find("p").classes())
    })
})
