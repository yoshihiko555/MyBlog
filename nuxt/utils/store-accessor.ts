import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import SampleStore from '~/store/sample'

let sampleStore: SampleStore

const initialiseStores = (store: Store<any>): void => {
  console.log('store:', store)
  sampleStore = getModule(SampleStore, store)
  console.log('sampleStore:', sampleStore)
}

export { initialiseStores, sampleStore }
