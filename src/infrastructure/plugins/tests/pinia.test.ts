import { describe, it, expect, vi } from "vitest"
import { createPinia } from "pinia"
import { setupPinia } from "../pinia"

/**=============
 * PINIA MOCK
================*/
vi.mock("pinia", () => ({
    createPinia: vi.fn(() => ({
        install: vi.fn(),
    })),
}))

describe("setupPinia", () => {
    /**======================================================
     * SHOULD CREATE PINIA STORE AND INSTALL IT IN THE APP
    =========================================================*/
    it("should create pinia store and install it in the app", () => {
        const app = {
            use: vi.fn(),
        }
        const mockPinia = {
            install: vi.fn(),
        }
        vi.mocked(createPinia).mockReturnValue(mockPinia as any)
        setupPinia(app as any)
        expect(createPinia).toHaveBeenCalledOnce()
        expect(app.use).toHaveBeenCalledWith(mockPinia)
    })

    /**===================================
     * SHOULD CALL CREATEPINIA FUNCTION
    ======================================*/
    it("should call createPinia function", () => {
        const app = {
            use: vi.fn(),
        }
        const mockPinia = {
            install: vi.fn(),
        }
        vi.mocked(createPinia).mockReturnValue(mockPinia as any)
        setupPinia(app as any)
        expect(createPinia).toHaveBeenCalled()
    })

    /**=====================================================
     * SHOULD REGISTER PINIA PLUGIN WITH THE APP INSTANCE
    ========================================================*/
    it("should register pinia plugin with the app instance", () => {
        const app = {
            use: vi.fn(),
        }
        setupPinia(app as any)
        expect(app.use).toHaveBeenCalledTimes(1)
    })
})
