import API from './api'
const moduleAPI = '/characters'

const charactersServices = {
    get: async () => {
        try {
            let results = await API.get(moduleAPI)
            return results.data
        } catch (error) {
            console.log(error)
        }
    },
    getOne: async (id: string) => {
        try {
            let results = await API.get(`${moduleAPI}/${id}`)
            return results.data
        } catch (error) {
            console.log(error)
            return null
        }
    },
    post: async (data: any) => {
        return await API.post(moduleAPI, data)
    },
    put: async (data: any, id:string) => {
        return await API.put(`${moduleAPI}/${id}`, data)
    },
    delete: async (id: string) => {
        return await API.delete(`${moduleAPI}/${id}`)
    }
}

export default charactersServices