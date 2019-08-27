import React from 'react'
import { connect } from 'react-redux'
import { toShortList } from '../../store/thunks'
import { switchSelection, selectAll, deSelectAll } from '../../store/detail'
import Button from '../Button'
import { ViewWrapper, ItemsTable, ViewFooter } from '../view_parts'
import './index.css'

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
    <div className='row product-row' key={el.id}>
      <div className='col-11'>
        <p>Арт.: {el.artNo}</p>
        <p>{el.name}</p>
        <div className='product-details' dangerouslySetInnerHTML={{ __html: el.description }} />
      </div>
      <div className='col-1 align-self-center'>

        <input
          type='checkbox'
          checked={selected.includes(ind)}
          onChange={((index) => () => onSelect(index))(ind)}
        />
      </div>
    </div>
  ))

const DetailView = ({ detail, switchSelection, selectAll, deSelectAll, toShortList }) => {
  const { selected, canSelectAll, canDeselectAll, canMoveItems, items } = detail
  return (
    <ViewWrapper>
      <ItemsTable>
        <div className='container'>

          <ItemsMap items={items} selected={selected} onSelect={switchSelection} />
        </div>
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
