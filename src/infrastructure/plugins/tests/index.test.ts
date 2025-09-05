import { describe, it, expect, vi, beforeEach } from "vitest"
import { setupPlugins } from "../index"

/**
 * Mock de todos los plugins
 */
vi.mock("../pinia", () => ({
    setupPinia: vi.fn(),
}))

vi.mock("../vue-router", () => ({
    setupRouter: vi.fn(),
}))

vi.mock("../animxyz", () => ({
    setupAnimXYZ: vi.fn(),
}))

vi.mock("@/presentation/stores/themeStore", () => ({
    useThemeStore: vi.fn(),
}))

import { setupPinia } from "../pinia"
import { setupRouter } from "../vue-router"
import { setupAnimXYZ } from "../animxyz"
import { useThemeStore } from "@/presentation/stores/themeStore"

describe("setupPlugins", () => {
    let app: any

    beforeEach(() => {
        // Mock de la instancia de app de Vue
        app = {
            use: vi.fn(),
            mount: vi.fn(),
            unmount: vi.fn(),
        }
        vi.clearAllMocks()
    })

    /**====================================
     * CALLS ALL PLUGIN SETUP FUNCTIONS
     =======================================*/
    it("should call all plugin setup functions", () => {
        setupPlugins(app)

        expect(setupPinia).toHaveBeenCalledWith(app)
        expect(setupRouter).toHaveBeenCalledWith(app)
        expect(setupAnimXYZ).toHaveBeenCalledWith(app)
        expect(useThemeStore).toHaveBeenCalled()
    })

    /**====================================
     * CALLS PLUGINS IN CORRECT ORDER
     =======================================*/
    it("should call plugins in the correct order", () => {
        const callOrder: string[] = []

        vi.mocked(setupPinia).mockImplementation(() => {
            callOrder.push("pinia")
        })

        vi.mocked(useThemeStore).mockImplementation(() => {
            callOrder.push("themeStore")
            // Return a minimal mock that satisfies the store interface
            return {} as any
        })

        vi.mocked(setupRouter).mockImplementation(() => {
            callOrder.push("router")
        })

        vi.mocked(setupAnimXYZ).mockImplementation(() => {
            callOrder.push("animxyz")
        })

        setupPlugins(app)

        expect(callOrder).toEqual(["pinia", "themeStore", "router", "animxyz"])
    })

    /**====================================
     * PASSES APP INSTANCE TO PLUGINS
     =======================================*/
    it("should pass app instance to all plugin setup functions", () => {
        setupPlugins(app)

        expect(setupPinia).toHaveBeenCalledWith(app)
        expect(setupRouter).toHaveBeenCalledWith(app)
        expect(setupAnimXYZ).toHaveBeenCalledWith(app)
    })

    /**====================================
     * INITIALIZES THEME STORE
     =======================================*/
    it("should initialize theme store", () => {
        setupPlugins(app)

        expect(useThemeStore).toHaveBeenCalledTimes(1)
    })

    /**====================================
     * EXECUTES WITHOUT ERRORS
     =======================================*/
    it("should execute without throwing errors", () => {
        expect(() => setupPlugins(app)).not.toThrow()
    })

    /**====================================
     * CALLS EACH PLUGIN SETUP ONCE
     =======================================*/
    it("should call each plugin setup function exactly once", () => {
        setupPlugins(app)

        expect(setupPinia).toHaveBeenCalledTimes(1)
        expect(setupRouter).toHaveBeenCalledTimes(1)
        expect(setupAnimXYZ).toHaveBeenCalledTimes(1)
        expect(useThemeStore).toHaveBeenCalledTimes(1)
    })
})
