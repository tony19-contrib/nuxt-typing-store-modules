import { InjectionKey, useStore as baseUseStore } from '@nuxtjs/composition-api'

export interface RootState {}

export const state = () => ({})

export const injectionKey: InjectionKey<RootState> =
  Symbol('vuex-injection-key')

export const useStore = () => {
  return baseUseStore(injectionKey)
}