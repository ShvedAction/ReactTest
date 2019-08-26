import React from 'react'
import { connect } from 'react-redux'
import { toShortList } from '../../store/thunks'
import { switchSelection, selectAll, deSelectAll } from '../../store/detail'
import Button from '../Button'
import { ViewWrapper, ItemsTable, ViewFooter } from '../view_parts'

const mapStateToProps = ({ detail }) => ({
  detail
})

const mapDispatchToProps = {
  switchSelection,
  selectAll,
  deSelectAll,
  toShortList
}

const ItemsMap = ({ items, selected, onSelect }) =>
  items.map((el, ind) => (
    <div className='test' key={ind}>{el.name}</div>
  ))

const DetailView = ({ detail, switchSelection, selectAll, deSelectAll, toShortList }) => {
  const { selected, canSelectAll, canDeselectAll, canMoveItems, items } = detail
  return (
    <ViewWrapper>
      <ItemsTable>
        <ItemsMap items={items} selected={selected} onSelect={switchSelection} />
      </ItemsTable>
      <ViewFooter>
        <Button activation={canSelectAll} click={selectAll}>Выбрать всё</Button>
        <Button activation={canDeselectAll} click={deSelectAll}>Выбрать ничего</Button>
        <Button activation={canMoveItems} click={toShortList}>Удалить выделен.</Button>
      </ViewFooter>
    </ViewWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView)
