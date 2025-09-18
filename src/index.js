'use strict'

import { create, Flex } from 'smbls'

import { Grid } from './grid'
import designSystem from './designSystem'
import * as components from './components'
import pages from './pages'

create(Grid, {
  designSystem,
  components,
  pages
})
