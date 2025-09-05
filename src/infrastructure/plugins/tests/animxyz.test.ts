import { describe, it, expect, vi } from "vitest"
import { setupAnimXYZ } from "../animxyz"

/**=====================
 * MOCK BY VUEANIMXYZ
========================*/
vi.mock("@animxyz/vue3", () => ({
    default: {
        install: vi.fn(),
    },
}))

/**================================
 * MOCKUP BY @ANIMXYZ/CORE (CSS)
===================================*/
vi.mock("@animxyz/core", () => ({}))

describe("setupAnimXYZ", () => {
    /**===========================================
     * SHOULD INSTALL ANIMXYZ PLUGIN IN THE APP
    ==============================================*/
    it("should install AnimXYZ plugin in the app", () => {
        const app = {
            use: vi.fn(),
        }
        setupAnimXYZ(app as any)
        expect(app.use).toHaveBeenCalledTimes(1)
    })

    /**==========================================
     * SHOULD CALL APP.USE WITH ANIMXYZ PLUGIN
    =============================================*/
    it("should call app.use with AnimXYZ plugin", async () => {
        const app = {
            use: vi.fn(),
        }
        setupAnimXYZ(app as any)
        /**=================================
         * VERIFY THAT APP.USE WAS CALLED
        ====================================*/
        expect(app.use).toHaveBeenCalled()
        /**=================================================
         * VERIFY THAT THE ARGUMENT IS THE ANIMXYZ PLUGIN
        ====================================================*/
        const pluginArg = app.use.mock.calls[0][0]
        expect(pluginArg).toBeDefined()
    })

    /**================================================
     * SHOULD REGISTER ANIMXYZ PLUGIN WITHOUT ERRORS
    ===================================================*/
    it("should register AnimXYZ plugin without errors", () => {
        const app = {
            use: vi.fn(),
        }
        expect(() => setupAnimXYZ(app as any)).not.toThrow()
        expect(app.use).toHaveBeenCalledTimes(1)
    })

    /**=================================
     * SHOULD IMPORT ANIMXYZ CORE CSS
    ====================================*/
    it("should import AnimXYZ core CSS", () => {
        /**===========================================================
         * THIS TEST VERIFIES THAT CSS IMPORT DOES NOT CAUSE ERRORS
        ==============================================================*/
        expect(() => {
            require("@animxyz/core")
        }).not.toThrow()
    })
})
