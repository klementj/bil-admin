import CategoryService from "@/services/category.service.js"

const categoryService = new CategoryService()

export const namespaced = true

export const state = {
    categories: []
}

export const mutations = {
    SET_CATEGORIES(state, categories){
        state.categories = categories
    },
    ADD_CATEGORY_TO_STORE(state, category){
        state.categories.push(category)
    }
}

export const actions = {
    fetchAllCategories({commit}){
        categoryService.fetch()
            .then(response => {
                commit('SET_CATEGORIES', response.data.data)
            })
    },

    addCategory({commit}, payload){
            categoryService.create(payload)
                .then(response => {
                    if(response.status === 201) {
                      commit('ADD_CATEGORY_TO_STORE', response.data.data)
                    }
                  })
    }
}

export const getters = {
    allCategories: state => state.categories
}