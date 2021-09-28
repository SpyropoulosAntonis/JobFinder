import { gql } from '@apollo/client';

//#region Get Locations
export const GET_LOCATIONS = gql`
query GetLocations($input: LocationsInput!)
{ 
    locations(input : $input)
  {
    name
    slug
    type
  }
  countries
  {
    slug
   
  }
}`;
//#endregion
