import { useQuery } from '@apollo/client';
import React, { Fragment, useEffect } from 'react'
import { Input, Segment } from 'semantic-ui-react';
import { useStore } from '../../Store/store';
import { LocationsResponse } from '../../Interfaces';
import Typewriter from 'typewriter-effect';
import { GET_LOCATIONS } from '../../Requests';
import '../Search/Style/style.css'


const Search = () => {

//#region Variables
  const setLocationsInput = useStore(state => state.setLocationsInput)
  const locations = useStore(state => state.locations);
  const setLocations = useStore(state => state.setLocations)
  const locationInput = useStore(state => state.locationInput);
  const setJobInput = useStore(state => state.setJobInput)
//#endregion

//#region Graphql Query
  const { loading, error, data } = useQuery<LocationsResponse>(GET_LOCATIONS,
    { variables: { input: { value: locationInput } }, onCompleted: (() => setLocations(data!)) })
//#endregion

//#region First render
  useEffect(() => {
    let locationInput = window.localStorage.getItem("locationInput")
    let locationInputSlug = window.localStorage.getItem("locationInputSlug")
    let locationInputType = window.localStorage.getItem("locationInputType")
    setLocationsInput(locationInput!)
    setJobInput({ type: locationInputType!, slug: locationInputSlug! })
  }, [])
//#endregion

return (
    <div>
      <div className="typewriter" >
        <Typewriter options={{ loop: true }} onInit={(typewriter) => {
          typewriter
          .typeString('<h1 style="color:white">Find your Dream Job</h1>')
          .pauseFor(2500)
          .deleteAll()
          .typeString('<h1 style="color:white">One Million jobs around the world</h1>')
          .typeString('<h1 style="color:white;text-align:center">waiting for you!</h1>')
          .pauseFor(2500)
          .deleteAll()
          .typeString('<h1 style="color:white">Work from your home</h1>')
          .typeString('<h1 style="color:white;text-align:center">search now...</h1>')
          .pauseFor(2500)
          .start()
        }} />
      </div>
      <div className="center fade">


        <Input focus icon="search" size="small" placeholder="search Locations..." value={locationInput} onChange={(value: any) => { setLocationsInput(value.target.value) }} />

        {
          locations.length > 0 &&
            locations[0].name != locationInput &&
            locationInput.length > 0 ?

            <Segment className="suggestions" >
              {locations.map(location => (

                <div className="selectable" onClick={() => {
                  setLocationsInput(location.name);
                  setJobInput({ type: location.type, slug: location.slug })
                  window.localStorage.setItem("locationInput", location.name);
                  window.localStorage.setItem("locationInputSlug", location.slug)
                  window.localStorage.setItem("locationInputType", location.type)
                }} key={location.slug}>{location.name}</div>

              ))}
            </Segment>
            : null
        }

      </div>
    </div>
  )
}

export default Search
