/**
 * This is processes for transferring items between short and detail views.
 */

import { dropCurrent as dropFromShort, add as addToShort } from '../short'
import { dropSelected as dropFromDetail, add as addToDetail } from '../detail'

const toDetailsList = () => (dispatch, getState) => {
  const { currentIndex, items } = getState().short

  const product = items[currentIndex]

  dispatch(addToDetail(product))
  dispatch(dropFromShort())
}

const toShortList = () => (dispatch, getState) => {
  const { selected, items } = getState().detail

  const products = selected.map(val => items[val])

  dispatch(addToShort(products))
  dispatch(dropFromDetail())
}

export { toDetailsList, toShortList }
