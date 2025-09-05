import { describe, it, expect, vi } from "vitest"
import { setupRouter } from "../vue-router"

// Mock del router
vi.mock("../../presentation/router", () => ({
    default: {
        install: vi.fn(),
        push: vi.fn(),
        replace: vi.fn(),
        resolve: vi.fn(),
    },
}))

describe("setupRouter", () => {
    /**====================================
     * INSTALLS ROUTER IN THE APP
     =======================================*/
    it("should install router in the app", () => {
        const app = {
            use: vi.fn(),
        }
        
        setupRouter(app as any)
        
        expect(app.use).toHaveBeenCalledTimes(1)
    })

    /**====================================
     * CALLS APP.USE WITH ROUTER INSTANCE
     =======================================*/
    it("should call app.use with router instance", async () => {
        const app = {
            use: vi.fn(),
        }
        
        setupRouter(app as any)
        
        // Verificar que se llamó app.use
        expect(app.use).toHaveBeenCalled()
        
        // Verificar que el argumento pasado es el router mockeado
        const routerArg = app.use.mock.calls[0][0]
        expect(routerArg).toBeDefined()
        expect(typeof routerArg).toBe("object")
    })

    /**====================================
     * REGISTERS ROUTER PLUGIN
     =======================================*/
    it("should register router plugin successfully", () => {
        const app = {
            use: vi.fn(),
        }
        
        // Ejecutar la función
        expect(() => setupRouter(app as any)).not.toThrow()
        
        // Verificar que se registró el plugin
        expect(app.use).toHaveBeenCalledTimes(1)
    })
})
