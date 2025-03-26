import {create} from 'zustand';

const useStore = create((set) => ({
    filters:{
        three:false,
        photoshop:false,
        graphic:false,
        motion:false,
        develop:false,
    },
    updateFilter:() => set()
  }))


export default useStore;