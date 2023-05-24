import  reducers  from './rootReducer'
// import { legacy_createStore as createStore } from 'redux'
import { createStore } from 'redux'

const store = createStore(
    reducers
)


export default store