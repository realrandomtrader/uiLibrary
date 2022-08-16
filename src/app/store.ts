import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import familyReducer from '../features/familyTree/familyTree.slice';

export const store = configureStore({
  reducer: {
    familyTree: familyReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
