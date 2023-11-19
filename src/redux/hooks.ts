/**
 * @description
 * Improve redux useDispatch and useSelector
 * useDispatch -> Add type checking
 * useSelector
 *  -> Add type checking
 *  -> Update calling format
 *       from: useSelector(state => state.storeName)
 *       to:   useSelector("storeName")
 * @exports useDispatch
 * @exports useSelector
 */

import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector = <TStoreName extends keyof RootState>(
  storeName: TStoreName
): RootState[TStoreName] =>
  useReduxSelector((state: RootState) => state[storeName]);
