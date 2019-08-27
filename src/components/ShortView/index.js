import React from 'react'
import { connect } from 'react-redux'
import { toDetailsList } from '../../store/thunks'
import { changeCurrentBy } from '../../store/short'
import Button from '../Button'
import { ViewWrapper, ItemsTable, ViewFooter } from '../view_parts'
import { articul } from './ShortView.module.css'

const mapStateToProps = ({ short }) => ({
  short
})

const mapDispatchToProps = {
  toDetailsList,
  changeCurrentBy
}

const ItemsMap = ({ items, currentIndex }) =>
  items.map((el, ind) => (
    <tr className={currentIndex === ind ? 'table-primary' : ''} key={el.id}>
      <td>
        {el.artNo}
      </td>
      <td>
        <span className={articul}>{el.name}</span>
      </td>
    </tr>
  ))

const ShortView = ({ short, toDetailsList, changeCurrentBy }) => {
  const { currentIndex, canIncreaseCurrent, canDecreaseCurrent, canMoveItem, items } = short
  return (
    <ViewWrapper>
      <ItemsTable>
        <table className='table table-striped table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col-4'>Артикул</th>
              <th scope='col-8'>Наименование</th>
            </tr>
          </thead>

          <tbody className=''>
            <ItemsMap items={items} currentIndex={currentIndex} />
          </tbody>

        </table>
      </ItemsTable>
      <ViewFooter>
        <Button activation={canIncreaseCurrent} click={() => changeCurrentBy(1)}>
          <i class='material-icons'>
            keyboard_arrow_down
          </i>
        </Button>
        <Button activation={canDecreaseCurrent} click={() => changeCurrentBy(-1)}>
          <i class='material-icons'>
            keyboard_arrow_up
          </i>
        </Button>
        <Button activation={canMoveItem} click={toDetailsList}>Добавить</Button>
      </ViewFooter>
    </ViewWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortView)
