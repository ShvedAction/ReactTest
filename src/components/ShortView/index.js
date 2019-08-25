import React from 'react'
import { connect } from 'react-redux'
import { toDetailsList } from '../../store/thunks'
import { changeCurrentBy } from '../../store/short'
import Button from '../Button'
// import ListWrapper from '../ListWrapper'
// import ViewFooter from '../ViewFooter'

const mapStateToProps = ({ short }) => ({
  short
})

const mapDispatchToProps = {
  toDetailsList,
  changeCurrentBy
}

const ItemsMap = ({items, currentIndex}) =>
  items.map((el, ind) => (
    <div  key={ind}>{el}</div>
  ))

const ShortView = ({ short, toDetailsList, changeCurrentBy }) =>{ 
  const { currentIndex, canIncreaseCurrent, canDecreaseCurrent, canMoveItem, items } = short
  return (
  <div>
    <div>
      <ItemsMap items={items} currentIndex={currentIndex}/>
    </div>
    <div>
      <Button activation={canIncreaseCurrent} click={()=> changeCurrentBy(1)}>D</Button>
      <Button activation={canDecreaseCurrent} click={()=> changeCurrentBy(-1)}>U</Button>
      <Button activation={canMoveItem} click={toDetailsList}>Добавить</Button>
    </div>
  </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortView)
