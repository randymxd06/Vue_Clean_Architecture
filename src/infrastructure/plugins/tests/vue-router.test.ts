import { describe, it, expect, vi } from "vitest"
import { setupRouter } from "../vue-router"

/**==============
 * ROUTER MOCK
=================*/
vi.mock("../../presentation/router", () => ({
    default: {
        install: vi.fn(),
        push: vi.fn(),
        replace: vi.fn(),
        resolve: vi.fn(),
    },
}))

describe("setupRouter", () => {
    /**===================================
     * SHOULD INSTALL ROUTER IN THE APP
    ======================================*/
    it("should install router in the app", () => {
        const app = {
            use: vi.fn(),
        }
        setupRouter(app as any)
        expect(app.use).toHaveBeenCalledTimes(1)
    })

    /**===========================================
     * SHOULD CALL APP.USE WITH ROUTER INSTANCE
    ==============================================*/
    it("should call app.use with router instance", async () => {
        const app = {
            use: vi.fn(),
        }
        setupRouter(app as any)
        expect(app.use).toHaveBeenCalled()
        /**=======================================================
         * VERIFY THAT THE ARGUMENT PASSED IS THE MOCKED ROUTER
        ==========================================================*/
        const routerArg = app.use.mock.calls[0][0]
        expect(routerArg).toBeDefined()
        expect(typeof routerArg).toBe("object")
    })

    /**=============================================
     * SHOULD REGISTER ROUTER PLUGIN SUCCESSFULLY
     ===============================================*/
    it("should register router plugin successfully", () => {
        const app = {
            use: vi.fn(),
        }
        expect(() => setupRouter(app as any)).not.toThrow()
        expect(app.use).toHaveBeenCalledTimes(1)
    })
})
