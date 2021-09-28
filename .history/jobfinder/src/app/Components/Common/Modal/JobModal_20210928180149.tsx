import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Button, Grid, GridColumn, Icon, Image, Label, Modal } from 'semantic-ui-react'
import { Job } from '../../../Interfaces'
import { useStore } from '../../../Store/store'

//#region Interfaces
interface Props {
    Job: Job
}
//#endregion

const JobModal: React.FC<Props> = (props) => {
    //#region Variables
    const OpenJobModal = useStore(state => state.OpenJobModal)
    const setOpenJobModal = useStore(state => state.setOpenJobModal)
    //#endregion


    return (
        <Modal
            open={OpenJobModal}
            onClose={() => setOpenJobModal(false)}
            onOpen={() => setOpenJobModal(true)}

        >
            <Modal.Header>{props.Job.company && props.Job.company.name}-{props.Job.title}</Modal.Header>
            <Modal.Content image scrolling>
                <Grid>
                    <GridColumn width="4">
                        <Image size='medium' src={props.Job.company && props.Job.company.logoUrl || "https://yashiindia.com/wp-content/uploads/2017/07/no-logo-available.gif"} wrapped />
                        {props.Job.tags && props.Job.tags.map((tag)=>(
                            <Label key={tag.id} style={{marginTop:"3px"}}>{tag.name}</Label>
                        ))}
                    </GridColumn>
                    <GridColumn width="12">
                        <Modal.Description>
                            <ReactMarkdown>
                            {props.Job.description}
                            </ReactMarkdown>
                        </Modal.Description>
                    </GridColumn>
                </Grid>



            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpenJobModal(false)} primary>
                    Close <Icon name='close' />
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default JobModal
