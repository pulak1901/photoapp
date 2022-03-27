import { store } from '../app/store'
import { saveState } from '../app/localStorage'
import { login, logout, setIcon, addAlbum, removeAlbum, addImageToAlbum, removeImageFromAlbum } from '../reducers/user'

export function userLogin(dispatch, name) {
    dispatch(login(name))
    saveState(store.getState())
}

export function userLogout(dispatch) {
    dispatch(logout())
    saveState(store.getState())
}

export function userSetIcon(dispatch, icon) {
    dispatch(setIcon(icon))
    saveState(store.getState())
}

export function userAddAlbum(dispatch, name) {
    dispatch(addAlbum(name))
    saveState(store.getState())
}

export function userRemoveAlbum(dispatch, name) {
    dispatch(removeAlbum(name))
    saveState(store.getState())
}

export function userAddAlbumImage(dispatch, album, imageData) {
    dispatch(addImageToAlbum({album, imageData}))
    saveState(store.getState())
}

export function userRemoveAlbumImage(dispatch, album, imageData) {
    dispatch(removeImageFromAlbum({album, imageData}))
    saveState(store.getState())
}

export function userAlbumContainsImage(album, imageData) {
    const storeUser = store.getState().user
    const userName = storeUser.currentUser
    const albumData = storeUser.userData[userName].albums[album]

    var i;
    for (i = 0; i < albumData.length; i++) {
        if (albumData[i].id === imageData.id) {
            return true;
        }
    }

    return false;
}