import { TypeDispatch } from '@/types/global';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from '..'

export const useAppDispatch: () => TypeDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
