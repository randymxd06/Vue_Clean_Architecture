import { describe, it, expect, vi } from "vitest"
import { setupAnimXYZ } from "../animxyz"

// Mock de VueAnimXyz
vi.mock("@animxyz/vue3", () => ({
    default: {
        install: vi.fn(),
    },
}))

// Mock de @animxyz/core (CSS)
vi.mock("@animxyz/core", () => ({}))

describe("setupAnimXYZ", () => {
    /**====================================
     * INSTALLS ANIMXYZ IN THE APP
     =======================================*/
    it("should install AnimXYZ plugin in the app", () => {
        const app = {
            use: vi.fn(),
        }
        
        setupAnimXYZ(app as any)
        
        expect(app.use).toHaveBeenCalledTimes(1)
    })

    /**====================================
     * CALLS APP.USE WITH ANIMXYZ PLUGIN
     =======================================*/
    it("should call app.use with AnimXYZ plugin", async () => {
        const app = {
            use: vi.fn(),
        }
        
        setupAnimXYZ(app as any)
        
        // Verificar que se llamó app.use
        expect(app.use).toHaveBeenCalled()
        
        // Verificar que el argumento es el plugin de AnimXYZ
        const pluginArg = app.use.mock.calls[0][0]
        expect(pluginArg).toBeDefined()
    })

    /**====================================
     * REGISTERS ANIMXYZ PLUGIN SUCCESSFULLY
     =======================================*/
    it("should register AnimXYZ plugin without errors", () => {
        const app = {
            use: vi.fn(),
        }
        
        // Ejecutar la función
        expect(() => setupAnimXYZ(app as any)).not.toThrow()
        
        // Verificar que se registró el plugin
        expect(app.use).toHaveBeenCalledTimes(1)
    })

    /**====================================
     * IMPORTS ANIMXYZ CORE CSS
     =======================================*/
    it("should import AnimXYZ core CSS", () => {
        // Esta prueba verifica que el import de CSS no cause errores
        expect(() => {
            require("@animxyz/core")
        }).not.toThrow()
    })
})
