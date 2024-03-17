import _ from 'lodash'
import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
  name: 'collectionStates',
  initialState: { links: [], buttons: [], footerLocations: [], locations: [], actionSections: [], seoContent: {} },
  reducers: {
    setLinks(state, action) {
      state.links = action.payload
    },
    setActionButtons(state, action) {
      state.buttons = _.filter(action.payload, data => data.fields.active === '1')
    },
    setFooterLocations(state, action) {
      state.footerLocations = _.filter(action.payload, data => data.fields.active === '1')
    },
    setLocations(state, action) {
      state.locations = action.payload
    },
    setActionSections(state, action) {
      state.actionSections = _.filter(action.payload, data => data.fields.active === '1')
    },
    setSeoContent(state, action) {
      state.seoContent = action.payload
    }
  }
})


const reducer = combineReducers({
  collectionStates: collectionSlice.reducer
})

const store = configureStore({
  reducer
})

export const collectionActions = collectionSlice.actions

export default store