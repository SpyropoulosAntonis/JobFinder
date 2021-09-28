import  create  from 'zustand';
import { Store, LocationsResponse, JobsResponse, JobInput,Job } from '../Interfaces';

export const useStore= create<Store>(set =>({ 
  //#region Variables
    locations:[],
    locationInput:"",
    jobs:[],
    jobInput:{type:"",slug:""},
    selectedJob: {} as any, 
    OpenJobModal : false,
  //#endregion

  //#region Functions
    setLocations : (data:LocationsResponse) => {set(state=> ({ locations:data.locations}))} ,
    setLocationsInput : (value:string)=>{set(state=>({locationInput:value}))},
    setJobs:(data:JobsResponse)=>{set(state=>({jobs:data.jobs}))},
    setJobInput : (value:JobInput)=>{set(state=>({jobInput:value}))},
    setSelectedJob : (data:Job) =>{set(state=>({selectedJob:data}))},
    setOpenJobModal:(value:boolean) => {set(state=>({OpenJobModal:value}))}
    }))
  //#endregion

    