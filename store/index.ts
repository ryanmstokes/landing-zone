import {
  /** getStoreType, */
  getAccessorType,
  mutationTree,
  actionTree,
} from 'nuxt-typed-vuex'


export const state = () => ({
  name: 'Landing Zone' as string,
  logo: "logo.svg" as string
})

type RootState = ReturnType<typeof state>

export const getters = {
  name: (state: RootState) => state.name,
  logo: (state: RootState) => state.logo
}

export const mutations = mutationTree(state, {
  setEmail(state, newValue: string) {
    state.name = newValue
  },
  setLogo(state, newValue: string) {
    state.logo = newValue
  },
  initialiseStore() {
    console.log('initialised')
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    /** ... */
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  /** modules: {
     ...
  }, */
})
