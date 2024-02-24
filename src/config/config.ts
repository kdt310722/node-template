import { createConfig } from '../core/config'
import { database } from './database'
import { logger } from './logger'

export const config = createConfig({
    database,
    logger,
})
