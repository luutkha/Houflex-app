
import {all} from 'redux-saga/effects'
import SearchSaga from 'features/Home/SearchSaga'


export default function* rootSaga(){
    console.log('Redux Saga Ready!')
    yield all([SearchSaga()])
}