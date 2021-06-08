import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faGithubSquare, faInstagramSquare, faRedditSquare } from '@fortawesome/free-brands-svg-icons'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const Footer = () => (
<footer className="footer">
  <Grid className="footer" container alignItems="center" justify="space-between">
    <Grid container item xs={12} md={4} justify="center">
      <Grid item xs={12} md={6}>
        <Typography variant="body1" color="textSecondary" component="h4" align="center">
          <div className="footer-text">© copyright 2021 turq, pbc</div>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1" color="textSecondary" component="h4" align="center">
          <div className="footer-text">Contact Email: tim@turq.io Phone: (617) 383-4266</div>
        </Typography>
      </Grid>
    </Grid>
    <Grid container item xs={12} md={4} alignItems="center" justify="center">
      <Grid item>
        <a
          href="https://twitter.com/Turqpbc"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon className="footer-text" size="2x" icon={faTwitterSquare} />
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://www.instagram.com/turq.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon className="footer-text" size="2x" icon={faInstagramSquare} />
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://github.com/TurqPBC"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon className="footer-text" size="2x" icon={faGithubSquare} />
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://www.reddit.com/r/citizenlegislation/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon className="footer-text" size="2x" icon={faRedditSquare} />
        </a>
      </Grid>
    </Grid>
    <Grid container item xs={12} md={4} justify="center">
      <Grid item>
        <Typography variant="body1" color="textSecondary" component="h4" align="center">
          <a className="footer-link" href="https://github.com/TurqPBC/turqV2/blob/master/TERMS_OF_USE.md">Terms of Use</a>
        </Typography>
      </Grid>
    </Grid>
  </Grid>
</footer>
)

export default Footer
