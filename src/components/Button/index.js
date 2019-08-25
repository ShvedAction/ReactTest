import React from 'react'

export default ({ children, activation, click}) => 
    <button onClick={click} disabled={!activation}>{children}</button>