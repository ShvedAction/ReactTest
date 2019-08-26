import React from 'react'

import {
  col,
  items,
  footer
} from './view_parts.module.css'

export const ViewWrapper = ({ children }) =>
  <div className={col}>{children}</div>

export const ItemsTable = ({ children }) =>
  <div className={items}>{children}</div>

export const ViewFooter = ({ children }) =>
  <div className={footer}>{children}</div>
