import React from 'react'
import { Grid } from '@material-ui/core'
import EnterpriseTable from './EnterpriseList'
import api from '../../Services/api'

export default class Enterprise extends React.Component {

    state = {
        enterprises: []
    }

    async componentDidMount() {
        api.get("/enterprise/profile/all").then(res => {
            console.log(res)
            this.setState({ enterprises: res.data })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Grid container justify="center">
                    <Grid item xs={12} sm={10}>
                        <EnterpriseTable enterprises={this.state.enterprises} />
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}