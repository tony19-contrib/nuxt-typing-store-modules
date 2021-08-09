export interface CartState {
  isComplete: boolean
}

export const state = (): CartState => ({
  isComplete: false,
})
