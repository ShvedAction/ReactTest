/**
 * It is a store for a detail view of the products list.
 * It has a currently selected indexes of items, product list in key "items" and
 * some flags to manage activations of control buttons.
 */
const SWITCH_SELECTION = 'SWITCH_SELECTION'
const DROP_SELECTED = 'DROP_SELECTED'
const ADD_PRODUCT = 'ADD_PRODUCT'

export const switchSelection = (index) => ({ type: SWITCH_SELECTION, index })

export const dropSelected = () => ({ type: DROP_SELECTED })

export const add = (product) => ({ type: ADD_PRODUCT, product })

const defaultState = {
  selected: [],
  canSelectAll: false,
  canDeselectAll: false,
  canMoveItems: false,
  items: [1, 2]
}

// It is model ob behivior for select falgs selected it
const selectedBehivior = (newState) => {
  const { selected, items } = newState

  // This can be the check of valid selection elements.
  // But I think it is too much

  const notEmpty = items.length > 0
  return {
    ...newState,
    canSelectAll: selected.length < items.length && notEmpty,
    canDeselectAll: selected.length > 0 && notEmpty,
    canMoveItems: selected.length > 0 && notEmpty
  }
}

const _switchSelection = (selections, index) => {
  if (selections.inculdes(index)) {
    // imutable
    return selections.fiter(el => el !== index)
  } else {
    return [...selections, index]
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_SELECTION:
      return selectedBehivior({
        ...state,
        selected: _switchSelection(state.selected, action.index)
      })

    case ADD_PRODUCT:
      return selectedBehivior({
        ...state,
        items: [...state.items.map(el => ({ ...el })), { ...action.product }]
      })

    case DROP_SELECTED:
      return selectedBehivior({
        ...state,
        items: state.items.filter((el, ind) => !state.selected.includes(ind)).map(el => ({ ...el })),
        selected: []
      })

    default:
      return state
  }
}
