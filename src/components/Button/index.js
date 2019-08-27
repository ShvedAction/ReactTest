import React from 'react'
import { button } from './button.module.css'

export default ({ children, activation, click }) =>
  <button className={`btn btn-secondary ${button}`} onClick={click} disabled={!activation}>{children}</button>
