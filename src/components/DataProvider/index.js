import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { add as addProductToStore } from '../../store/short'

const MAGIC_CONST = 'https://gist.githubusercontent.com/ShvedAction/f855ce950310658c8d2c79ad20f186d1/raw/4812af63ad261b240dc550075b425fac70bd437d/fixture.json'

const mapDispatchToProps = {
  addProductToStore
}

const DataProvider = ({ addProductToStore, children }) => {
  useEffect(() => {
    fetch(MAGIC_CONST).then((res) => {
      return res.json()
    }).then(products => {
      console.log(products)
      return addProductToStore(products)
    })
  })
  return (
    <>
      {children}
    </>
  )
}

export default connect(() => ({}), mapDispatchToProps)(DataProvider)
