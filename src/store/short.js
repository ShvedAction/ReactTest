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

const currentIndexBehivior = (newState) => {
  // yep, items should be a const
  let { currentIndex, items } = newState

  // if we drop last item
  if (currentIndex > items.length - 1) {
    currentIndex = items.length - 1
  }

  return {
    ...newState,
    canIncreaseCurrent: currentIndex < newState.items.length - 1,
    canDecreaseCurrent: currentIndex > 0,
    // other states cann't be exist
    canMoveItem: newState.items.length > 0 && currentIndex > -1,
    currentIndex
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
      const newCurrent = state.currentIndex + action.count
      if (newCurrent > -1 && newCurrent < state.items.length) {
        return currentIndexBehivior({ ...state, currentIndex: newCurrent })
      } else {
        return currentIndexBehivior({ ...state })
      }

    default:
      return state
  }
}
