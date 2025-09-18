'use strict'

import { Flex } from 'smbls'

export const Grid = {
  extend: Flex,

  props: {
    theme: 'document',
    flow: 'column',
    height: '100vh',
    align: 'center space-between'
  },
  
  Header: {},
  content: {},
  GridComponent: {},
  Footer: {}

}