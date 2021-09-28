//@ts-nocheck
import { useEffect, useRef } from 'react'
import { JobsResponse } from '../../Interfaces'
import { useStore } from '../../Store/store'
import JobModal from '../Common/Modal/JobModal'
import { Flag, ItemMeta, Item, ItemContent, ItemGroup, ItemHeader, ItemImage, Segment, ItemDescription, ItemExtra, Button, Label } from 'semantic-ui-react'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../../Requests'
import './Style/style.css'

const Jobs = () => {
    //#region Variables
    const jobInput = useStore(state => state.jobInput)
    const jobs = useStore(state => state.jobs)
    const selectedJob = useStore(state => state.selectedJob)
    const setJobs = useStore(state => state.setJobs)
    const setSelectedJob = useStore(state => state.setSelectedJob)
    const setOpenJobModal = useStore(state => state.setOpenJobModal)
    const ref = useRef(null)
    //#endregion

    //#region Functions
    const scrollToRef = () => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    //#endregion

    //#region Graphql Query
    const { loading, error, data } = useQuery<JobsResponse>(GET_JOBS,
        { variables: { input: { type: jobInput.type, slug: jobInput.slug } }, onCompleted: (() => setJobs(data!)) })
    //#endregion

    //#region First renders
    useEffect(() => {
        scrollToRef()
    }, [jobs])
    //#endregion


    return (
        <div className='bottom fade' ref={ref}>
            <JobModal Job={selectedJob} />
            {jobs.length > 0 && jobInput.slug ? jobs.map((job) => (
                <Segment key={job.id}>
                    <ItemGroup>
                        <Item>
                            <ItemImage size="tiny" src={job.company.logoUrl || "https://yashiindia.com/wp-content/uploads/2017/07/no-logo-available.gif"} />
                            <ItemContent>
                                <ItemHeader as='a' onClick={() => window.open(job.company.websiteUrl)}>{job.title} </ItemHeader>
                                {job.cities && job.cities[0] &&
                                    <span style={{ float: 'right' }}>
                                        {job.cities[0].country && job.cities[0].country.name} - <Flag name={job.cities[0].country && job.cities[0].country.isoCode} />
                                    </span>}
                                <ItemMeta>{job.company.name}</ItemMeta>
                                <ItemDescription>{job.description.slice(0, 300).split("**")}...</ItemDescription>
                                <ItemExtra>
                                    {job.tags && job.tags.map((tag, i) => (
                                        i < 7 ?
                                            <Label style={{ margin: "1px" }} key={tag.id}>{tag.name}</Label>
                                            : null
                                    ))}
                                    <Button floated='right' onClick={() => window.open(job.applyUrl)} secondary floated='right'>Apply</Button>
                                    <Button onClick={() => { setSelectedJob(job); setOpenJobModal(true) }} primary floated='right'>More</Button>
                                </ItemExtra>
                            </ItemContent>
                        </Item>
                    </ItemGroup>
                </Segment>
            )) : null}

        </div>
    )
}
export default Jobs