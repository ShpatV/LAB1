import { breadcrumbsClasses } from '@mui/material';
import axios,{ AxiosError, AxiosResponse } from 'axios';
import { request } from 'http';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Activity, ActivityFormValues } from '../models/activity';
import { Book } from '../models/book';
import { EmailActivity, EmailActivityFormValues } from '../models/emailactivity';
import { PaginatedResult } from '../models/Pagination';
import { Photo, Profile } from '../models/profile';
import { SuggestionActivity, SuggestionActivityFormValues } from '../models/suggestionactivity';
import { User, UserFormValues } from '../models/user';
import { store } from '../stores/store';

const sleep = (delay: number) => {
    return new Promise((resolve)=> {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL='http://localhost:5000/api';

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if(token) config.headers!.Authorization = `Bearer ${token}`
    return config;
})//dorzimi i token nqdo request

axios.interceptors.response.use(async response=>{

        await sleep(1000);
        const pagination = response.headers['pagination'];
        if(pagination) {
            response.data = new PaginatedResult(response.data, JSON.parse(pagination));
            return response as AxiosResponse<PaginatedResult<any>>
        }
        return response;
} , (error: AxiosError)  => {
    const {data, status, config, headers} = error.response!;
    switch (status) {
        case 400:
            if(config.method === 'get' && data.errors.hasOwnProperty('id')) {
                history.push('/not-found');
            }
            if (data.errors){
                const modalStateErrors= [];
                for(const key in data.errors) {
                    if (data.errors[key]){
                        modalStateErrors.push(data.errors[key])
                    }
                }
                throw modalStateErrors.flat();
            } 
            break;
        case 401:
            if(status === 401 && headers ['www-authenticate'].startsWith('Bearer error="invalid_token"')){
                store.userStore.logout();
                toast.error('Session expired - please login again');
        }
           
            break;
        case 404: 
            history.push('/not-found');
            break;
        case 500:
            store.commonStore.setServerError(data);
            history.push('/server-error');
            break;            
    }
    return Promise.reject(error);
})

const responseBody= <T> ( response: AxiosResponse<T>)=> response.data;//get.post.delete

const requests={
    get:<T>(url:string)=> axios.get<T>(url).then(responseBody),
    post:<T>(url:string,body:{})=> axios.post<T>(url,body).then(responseBody),
    put:<T>(url:string,body: {})=> axios.put<T>(url,body).then(responseBody),
    del:<T>(url:string)=> axios.delete<T>(url).then(responseBody),
}

const Activities = { //requestat
    list: (params: URLSearchParams) => axios.get<PaginatedResult<Activity[]>>('/activities', {params}).then(responseBody),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity:ActivityFormValues)=> requests.post<void>('/activities',activity),
    update: (activity:ActivityFormValues)=> requests.put<void>(`/activities/${activity.id}`,activity),
    delete: (id:string)=> requests.del<void>(`/activities/${id}`),
    attend: (id: string) => requests.post<void>(`/activities/${id}/attend`,{})
}

const Account= {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register' , user),
    refreshToken: () => requests.post<User>('/account/refreshToken', {})
}

const EmailActivities =  {
    list: () => axios.get<EmailActivity[]>('/emailactivities'),
    details: (id: string) => requests.get<EmailActivity>(`/emailactivities/${id}`),
    create: (emailActivity : EmailActivityFormValues)=> requests.post<void>('/emailactivities', emailActivity),
    // update: (activity:ActivityFormValues)=> requests.put<void>(`/activities/${activity.id}`,activity),
    delete: (id:string)=> requests.del(`/emailactivities/${id}`)
}

const SuggestionActivities =  {
    list: () => axios.get<SuggestionActivity[]>('/suggestionactivities'),
    details: (id: string) => requests.get<SuggestionActivity>(`/suggestionactivities/${id}`),
    create: (suggestionActivity : SuggestionActivityFormValues)=> requests.post<void>('/suggestionactivities', suggestionActivity),
    update: (suggestionActivity:SuggestionActivityFormValues)=> requests.put<void>(`/suggesitonactivities/${suggestionActivity.id}`,suggestionActivity),
    delete: (id:string)=> requests.del(`/suggesitonactivities/${id}`),
    attend: (id: string) => requests.post<void>(`/suggestionactivities/${id}/attend`,{})
}


const Profiles = {
    get: (username: string) => requests.get<Profile>(`/profiles/${username}`),
    uploadPhoto: (file:Blob) => {
        let formData = new FormData();
        formData.append('File' , file);
        return axios.post<Photo>('photos' , formData , {
            headers: {'Content-type' : 'multipart/form-data'}
        })
    } ,
    setMainPhoto: (id: string) => requests.post(`/photos/${id}/setMain`, {}),
    deletePhoto: (id: string) => requests.del(`/photos/${id}`),
    updateProfile: (profile: Partial<Profile>) => requests.put(`/profiles`, profile),
    updateFollowing: (username : string) => requests.post(`/follow/${username}`, {}),
    listFollowings: (username: string, predicate: string) => requests.get<Profile[]>(`/follow/${username}?predicate=${predicate}`)//endpoint napi
}

const Books = {
    list: () => axios.get<Book[]>('/books'),
    details: (id: string) => requests.get<Book>(`/books/${id}`),
    // create: (emailActivity : EmailActivityFormValues)=> requests.post<void>('/books', emailActivity),
    // update: (activity:ActivityFormValues)=> requests.put<void>(`/activities/${activity.id}`,activity),
    delete: (id:string)=> requests.del<void>(`/books/${id}`)
}



const agent = {
    Activities,
    Account,
    Profiles,
    EmailActivities,
    SuggestionActivities
}

export default agent;