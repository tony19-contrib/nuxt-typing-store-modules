import { InjectionKey, useStore as baseUseStore } from '@nuxtjs/composition-api'
import type { CartState } from './shop/cart'

export interface RootState {
  shop: {
    cart: CartState
  }
}

export const state = () => ({})

export const injectionKey: InjectionKey<RootState> =
  Symbol('vuex-injection-key')

export const useStore = () => {
  return baseUseStore(injectionKey)
}