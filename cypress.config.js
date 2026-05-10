import { defineConfig } from 'cypress'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({

  viewportWidth: 1366,
  viewportHeight: 768,

  video: true,

  e2e: {

    baseUrl: process.env.CYPRESS_BASE_URL,

    env: {
      validEmail: process.env.CYPRESS_VALID_EMAIL,
      validPassword: process.env.CYPRESS_VALID_PASSWORD
    },

    setupNodeEvents(on, config) {
      return config
    },

  },

})