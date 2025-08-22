import type { App } from 'vue';
import VueAnimXyz from '@animxyz/vue3';
import '@animxyz/core';

export function setupAnimXYZ(app: App) {
    
  app.use(VueAnimXyz);
  
  // OPTIONAL: CUSTOM CONFIGURATION
  // const xyzConfig = { /* your settings */ }
  // app.use(VueAnimXyz, xyzConfig)

}