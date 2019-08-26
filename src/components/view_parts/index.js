import React from 'react'

import {
  main,
  items,
  footer
} from './parts.css'

export const ViewWrapper = ({ children }) =>
  <div className={main}>{children}</div>

export const ItemsTable = ({ children }) =>
  <div className={items}>{children}</div>

export const ViewFooter = ({ children }) =>
  <div className={footer}>{children}</div>
