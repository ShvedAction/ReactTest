import React from 'react'
import { connect } from 'react-redux'
import { toDetailsList } from '../../store/thunks'
import { changeCurrentBy } from '../../store/short'
import Button from '../Button'
import {ViewWrapper, ItemsTable, ViewFooter} from '../view_parts'

const mapStateToProps = ({ short }) => ({
  short
})

const mapDispatchToProps = {
  toDetailsList,
  changeCurrentBy
}

const ItemsMap = ({items, currentIndex}) =>
  items.map((el, ind) => (
    <div className={"test"}  key={ind}>{el.name}</div>
  ))

const ShortView = ({ short, toDetailsList, changeCurrentBy }) =>{ 
  const { currentIndex, canIncreaseCurrent, canDecreaseCurrent, canMoveItem, items } = short
  return (
  <ViewWrapper>
    <ItemsTable>
      <ItemsMap items={items} currentIndex={currentIndex}/>
    </ItemsTable>
    <ViewFooter>
      <Button activation={canIncreaseCurrent} click={()=> changeCurrentBy(1)}>D</Button>
      <Button activation={canDecreaseCurrent} click={()=> changeCurrentBy(-1)}>U</Button>
      <Button activation={canMoveItem} click={toDetailsList}>Добавить</Button>
    </ViewFooter>
  </ViewWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortView)
