import { atom } from 'recoil'
import { PostType } from '../types/postTypes'

export const postsDataState = atom<PostType[]>({
  key: 'postsDataState_key',
  default: [],
})