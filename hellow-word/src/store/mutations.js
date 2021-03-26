const mutations = {
    increment (state) {
        state.count++
    },

    isHidden (state, yes) {
        if(yes){
            state.isHidden = true
        }else {
            state.isHidden = false
        }
    }
}

export default mutations;