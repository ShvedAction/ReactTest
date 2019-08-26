import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { add as addProductToStore } from '../../store/short'

const MAGIC_CONST = "https://gist.githubusercontent.com/ShvedAction/f855ce950310658c8d2c79ad20f186d1/raw/b6a30694cb8167df4c7f4990858b945097b411cd/fixture.json"


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
    })})
  return (
    <>
      {children}
    </>
  )
}

export default connect(()=> ({}), mapDispatchToProps)(DataProvider)
