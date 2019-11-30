import ProjectService from '@/services/project.service'

const projectService = new ProjectService()

export const namespaced = true

export const state = {
    projects: []
}


export const mutations = {
    SET_PROJECTS(state, projects){
        state.projects = projects
      },
      ADD_PROJECT_TO_STORE(state, project) {
        state.projects.push(project)
      },
      UPDATE_PROJECTS(state, updatedProject){
        state.projects.map(obj => obj.id === updatedProject.id && Object.assign(obj, updatedProject))
      }
}

export const actions = {
    fetchAllProjects({ commit }) {
        projectService.fetch()
            .then(response => {
            commit('SET_PROJECTS', response.data.data)
            })
            .catch(error => {
            throw error
            })
        },

        addProject({ commit }, payload) {
        projectService.create(payload)
            .then(response => {
            if(response.status === 201) {
                commit('ADD_PROJECT_TO_STORE', response.data.data)
            }
            })
        },

        updateProject({commit}, payload){
            
            const { id, pram1, pram2, pram3, pram4, pram5 } = payload
            try {
            
            projectService.update(id, { pram1, pram2, pram3, pram4, pram5 })
            .then(response => {
                if(response.status === 200){
                commit('UPDATE_PROJECTS', payload)
                }
            })
            
            } catch (error) {
            alert(error)
            }
        }
}

export const getters = {
    allProjects: state => state.projects
}