import React from "react"
import axios from "axios";
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';

import ContestPanelList from "../components/competition/contestPanelList"
import { CONTEST_DATA_URL } from "../constants"
import Layout from "../components/layout/layout"
import Hero from "../components/hero"
import { isPastEndDate } from "../util/dateCompare"
import { POST_ISSUE_URL } from '../constants'

class Home extends React.Component {

  componentDidMount() {
    axios.get(CONTEST_DATA_URL)
      .then(res => {
        const contests = res.data;
        this.setState({contests});
      }
    ).catch(function (error) {
      toast.error("Unable to load contest, plese try again in a few minutes");
    })
  }
  
  render() {
    var currentContests = null 
    if (this.state && this.state.contests) {
      currentContests = this.state.contests 
        .filter(contest => !isPastEndDate(contest.endDate))
    }
    return (
      <Layout fullWidth>
        <Grid container>
          <Grid item>
            <Hero
              link={POST_ISSUE_URL}
              header="Lawmakers Are Overwhelmed"
              buttonText="Launch an Issue"
              subtext="Calls, emails, and petitions don't solve problems, they simply overwhelm Lawmakers. What Lawmakers need are readymade pieces of legislation. At turq.io we make that happen. We connect people like you with others that will solve your issue and turn that solution into legislation. Think Upwork, but for legislation. We then get that legislation to Lawmakers. Think Change.org, but with real results. We're here to solve the problems you care about while at the same time making Lawmakers’ lives simpler. Connect with us at (617) 383-4266, or launch your issue today!"
            />
          </Grid>
          <Grid item xs={12} className="active-issue-section">
            {currentContests
            ? <ContestPanelList title="Active Issues" contests={currentContests} />
            : <></>
            }
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default Home
