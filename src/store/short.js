/**
 * It is a store for a short view of the products list.
 * It has a currently selected index of line, product list in key "items" and
 * some flags to manage activations of control buttons.
 */
const CHANGE_CURRENT_VALLUE = 'CHANGE_CURRENT_VALLUE'
const DROP_CURRENT = 'DROP_CURRENT'
const ADD_PRODUCTS = 'SHORT_LIST_ADD_PRODUCTS'

export const changeCurrentBy = (count) => ({ type: CHANGE_CURRENT_VALLUE, count })

export const dropCurrent = () => ({ type: DROP_CURRENT })

export const add = (products) => ({ type: ADD_PRODUCTS, products })

const defaultState = {
  currentIndex: 0,
  canIncreaseCurrent: true,
  canDecreaseCurrent: false,
  canMoveItem: true,
  items: [{
    id: 1,
    artNo: '123456',
    name: 'some name',
    description: 'some detail description of this product'
  }, {
    id: 1,
    artNo: 'adfxzv',
    name: 'some name 2',
    description: 'some detail description of this product 2'
  }]
}

/**
 * Here is some litle math magic. You know I don't like 'if's )))
 * You can fast check this like here:
 *   for(var  i = -5; i<15; i++) {console.log(i, normalizationIndex(i, 1, 6))}
 * I explain the same math magic on my chennal: https://youtu.be/O-roAV-ttBI
 * @param {normalization value} index
 * @param {min value} min
 * @param {max value} max
 */
const normalizationIndex = (index, min, max) =>
  (index + Math.abs(index - min) + min) / 2 - (index + Math.abs(index - max) - max) / 2

const currentIndexBehivior = (newState) => {
  const { currentIndex, items } = newState

  return {
    ...newState,
    canIncreaseCurrent: currentIndex < items.length - 1,
    canDecreaseCurrent: currentIndex > 0,
    // other states cann't be exist
    canMoveItem: items.length > 0 && currentIndex > -1,
    currentIndex: normalizationIndex(currentIndex, 0, items.length - 1)
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case DROP_CURRENT:
      return currentIndexBehivior({
        ...state,
        items: state.items.filter((e, ind) => ind !== state.currentIndex).map(el => ({ ...el }))
      })

    case ADD_PRODUCTS:
      return currentIndexBehivior({
        ...state,
        items: [...state.items.map(el => ({ ...el })), ...action.products.map(el => ({ ...el }))]
      })

    case CHANGE_CURRENT_VALLUE:
      return currentIndexBehivior({ ...state, currentIndex: state.currentIndex + action.count })

    default:
      return state
  }
}
