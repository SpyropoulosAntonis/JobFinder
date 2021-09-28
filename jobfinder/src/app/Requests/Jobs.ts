import { gql } from '@apollo/client';

//#region Get Jobs
export const GET_JOBS = gql`
query GetJobs($input:JobsInput!)
{ 
    jobs(input :$input)
    {
      id
      title
      slug
      applyUrl
      tags
      { 
        id
        name
      }
      description
      locationNames
      company{
        name
        slug
        logoUrl
        websiteUrl
      }
     cities{
      name
      slug
      country
      {
        name
        isoCode
      }
    }
    countries
    { 
      name
      slug
      isoCode
    }
      
    }
}
`;
//#endregion