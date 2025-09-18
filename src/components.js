'use strict'

import { Flex, Link } from 'smbls'

const Table = {
  tag: 'table',
  props: {
    background: '#f5f5f5',
    border: '1px solid black',
    borderRadius: 'Z',
  }
}

const TableBody = {
  tag: 'tbody'
}

const TableRow = {
  tag: 'tr'
}
const TableCell = {
  tag: 'td',
  text: ''
}


export const Header = {
  extend: Flex,
  props: {
    minWidth: '100%',
    padding: 'Z B',
    align: 'center space-between'
  },

  Flex: {
    props: { gap: 'C' },
    childExtend: {
      extend: Link,
    },
    Text_logo: { href: '/', text: 'Grid Selection' }
  },

  ThemeSwitcher: {}
}

export const ThemeSwitcher = {
  extend: Flex,
  props: { gap: 'A2' },
  childExtend: {
    props: (element, state) => ({
      active: state.globalTheme === element.key,
      cursor: 'pointer',
      '.active': {
        fontWeight: '900'
      }
    }),
    on: {
      click: (event, element, state) => {
        state.update({ globalTheme: element.key })
      }
    }
  },
  dark: { text: 'Dark' },
  light: { text: 'Light' },
  midnight: { text: 'Midnight' }
}

export const GridComponent = {
  extend: Table,
  children: [
    {
      extend: TableBody,
      children: Array.from({ length: 8 }, () => ({
        extend: TableRow,
        
        props: (element, state) => ({
          border: '1px solid black' 
        }),

        children: Array.from({ length: 16 }, () => ({
          extend: TableCell,
          props: (element, state) => ({
            border: '1px solid black',
            padding: 'B',
            borderRadius: 'Z',
            background: parseInt(state.selectedRow) >= parseInt(element.parent.parent.key) && parseInt(state.selectedCell) >= parseInt(element.key) ? "blue" : "lightblue"
          }),
          on: {
            click: (event, element, state) => {
              state.update({ selectedCell: element.key, selectedRow: element.parent.parent.key });
              state.update({ cols: parseInt(element.key) + 1});
              state.update({ rows: parseInt(element.parent.parent.key) + 1});
              state.update({ total: (parseInt(element.key) + 1) * (parseInt(element.parent.parent.key) + 1)});
            }
          }
        }))

      }))
    }
  ]
}

export const Footer = {
  extend: Flex,
  props: {
    gap: 'C3'
  },
  
  coordinates: { 
    text: (element, state) => `Selection Coordinates: ${state.cols || -1}, ${state.rows || -1}`
  },
  
  total: { 
    text: (element, state) => `Total cells selected: ${state.total || -1}`
  }
}
