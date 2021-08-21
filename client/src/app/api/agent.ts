import { AxiosResponse } from 'axios'
import axiosInstance from './axios'
import { IEventsIn, IEventsOut } from '../models'


const responseBody = (response: AxiosResponse) => response.data
const requests = {
    get: (url: string) => axiosInstance.get(url).then(responseBody),
    post: (url: string, body: {}) => axiosInstance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axiosInstance.put(url, body).then(responseBody),
    del: (url: string) => axiosInstance.delete(url).then(responseBody)
}

export const Events = {
    list: (): Promise<IEventsOut[]> => requests.get('/events/all'),
    listAllActive: (): Promise<IEventsOut[]> => requests.get('/events/all/active'),
    details: (id: number): Promise<IEventsOut> => requests.get(`/events/${id}`),
    updateEventToPublished: (id: number): Promise<number> => requests.put(`/events/${id}`, {}),
    create: (event: IEventsIn) => requests.post('/events/create', event),
    // update: (pensum: IPensum) => requests.put(`/pensum/${pensum.id}`, pensum),
    delete: (id: number) => requests.del(`/events/${id}`),
}
