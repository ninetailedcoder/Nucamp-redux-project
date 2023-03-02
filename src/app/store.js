import { configureStore } from '@reduxjs/toolkit';
import {campsitesReducer} from '../features/campsites/campsitesSlice'
import { commentsReducer } from '../features/comments/commentSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';
import logger from 'redux-logger';
export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    promotions: promotionsReducer,
    partners: partnersReducer,
    comments: commentsReducer,
    user: userReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
