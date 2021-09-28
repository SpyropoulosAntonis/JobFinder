import { Location, LocationsResponse, Job, JobsResponse } from "./";
import { JobInput } from "./JobsInterface";




export interface Store {
    //#region Variables
    locationInput: string
    locations: Location[]
    jobInput: { type: string, slug: string }
    jobs: Job[]
    selectedJob: Job
    OpenJobModal : boolean
    //#endregion

    //#region Functions
    setLocations: (data: LocationsResponse) => void
    setLocationsInput: (value: string) => void
    setJobs: (data: JobsResponse) => void
    setJobInput: (value: JobInput) => void
    setSelectedJob : (data:Job) =>void
    setOpenJobModal:(value:boolean) => void
    //#endregion
}