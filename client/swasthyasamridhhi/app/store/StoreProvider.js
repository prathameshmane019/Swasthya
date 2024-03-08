'use client'

import { Provider } from 'react-redux'
import store from './store'
export default function StoreProvider({ count, children }) {


  return <Provider store={store}>{children}</Provider>
}