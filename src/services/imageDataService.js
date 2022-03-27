import { store } from '../app/store'
import { saveState } from '../app/localStorage'
import {  fetchImageData, clearData } from '../reducers/imageData'

export function downloadImageData(dispatch) {
    dispatch(fetchImageData())
    saveState(store.getState())
}

export function resetImageData(dispatch) {
    dispatch(clearData())
    saveState(store.getState())
}
