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
    post: async (data: any) => {
        return await API.post(moduleAPI, data)
    },
    put: async (data: any) => {
        return await API.put(moduleAPI, data)
    },
    delete: async (id: number) => {
        return await API.delete(`${moduleAPI}/${id}`)
    }
}

export default charactersServices