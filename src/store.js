import {create} from 'zustand';

const useStore = create((set) => ({
    filters:{
        three:false,
        photoshop:false,
        graphic:false,
        motion:false,
        develop:false,
    },
    overflow:false,
    toggleFilter: (key) => set((state) => ({
      filters: {
        ...state.filters,
        [key]: !state.filters[key],
      }
    })),

  }))


export default useStore;