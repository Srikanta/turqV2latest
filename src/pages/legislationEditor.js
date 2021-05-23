import React from "react"
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { toast } from 'react-toastify';

import EditorLayout from "../components/editor/layout"

import Editor, { LeftPanel, RightPanel } from "../components/editor/editor"

import Modal from "../components/modal"
import { updateLegislation, fetchLegislation } from '../actions/legislationActions'

  
class LegislationEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {legislation: {}};
    this.handleChange = this._handleChange.bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
    this.populateSavedData = this._populateSavedData.bind(this);
  }
  
  componentDidMount() {







    var config = {
      apiKey: "AIzaSyDBdICGrLQ691Jkn8gZGJbNXvb5OT7Sq9E",
      databaseURL: "https://posts-9128d-default-rtdb.firebaseio.com/",
    };


    window.firebase.initializeApp(config);
    var firepadRef = this.getExampleRef();
    var codeMirror = window.CodeMirror(document.getElementById('firepad-container'), { lineWrapping: true });


    var firepad = window.Firepad.fromCodeMirror(firepadRef, codeMirror,
    { richTextToolbar: true, richTextShortcuts: true });
    //// Initialize contents.
    firepad.on('ready', function() {
      if (firepad.isHistoryEmpty()) {
        //firepad.setHtml('');
      }
      else
      {
        var text = firepad.getHtml();
        document.getElementById('firepad-post').innerHTML = text;

      }
   

   
    });


    const prev_data = localStorage.getItem('unsaved_legislation')

    //If we have a parameter we need to get the info for that contest
    var contest = new URLSearchParams(this.props.location.search).get('contest')

    /*
    if (this.props.match.params.id) {
      this.props.dispatch(fetchLegislation(this.props.match.params.id))
    } else if (prev_data !== null) {
      var legislation = JSON.parse(prev_data);
      var showModal = isEmpty(legislation) ? false : true
      this.setState({...this.state, isLoaded: true, showModal: showModal, savedData: {...legislation}, contest: contest})
    } else if (contest) {
      contest = parseInt(contest)
      // Set to true automatically if we aren't requesting data
      this.setState({...this.state, isLoaded: true, contest: contest})
    }
    */
  }

  getExampleRef() {

    var user = localStorage.email.substring(0, 4);
    var ref = window.firebase.database().ref('posts/'+user);
    
   
    return ref;

  }
  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, legislation: {...nextProps.legislation}})
  }

  componentDidUpdate() {
    localStorage.setItem('unsaved_legislation', JSON.stringify(this.state.legislation))
  }

  _checkMandatoryFields() {
    var isValid = true
    const legislation = this.state.legislation
    if (legislation === undefined) {
      toast.error('Document Empty: Please fill in required Fields');
      isValid = false
    } else if (legislation.title === undefined || legislation.title === "") {
      toast.error('Missing Required Fields: Please include "Title"');
      isValid = false
    } else if (legislation.chapter === undefined || legislation.chapter === "") {
      toast.error('Missing Required Fields: Please include "Chapter"');
      isValid = false
    } else if (legislation.section === undefined || legislation.section === "") {
      toast.error('Missing Required Fields: Please include "General Laws Section"');
      isValid = false
    } else if (legislation.accomplishes === undefined || legislation.accomplishes === "") {
      toast.error('Missing Required Fields: Please include "Describe what this bill accomplishes in 1-2 sentences"');
      isValid = false
    } else if (legislation.terms === undefined || legislation.terms === "") {
      toast.error('Missing Required Fields: Please include "Define the terms you will be using in this legislation"');
      isValid = false
    } else if (legislation.purpose === undefined || legislation.purpose === "") {
      toast.error('Missing Required Fields: Please include "Statement of Purpose"');
      isValid = false
    } else if (legislation.provisions === undefined || legislation.provisions === "") {
      toast.error('Missing Required Fields: Please include "Provisions"');
      isValid = false
    }
    return isValid
  }

  _handleSubmit() {
      if (!this._checkMandatoryFields()) {

        return
      }
      const legislationId = this.props.match.params.id
      const token = this.props.token
      const data = {...this.state.legislation, contestId: this.state.contest}
      this.props.dispatch(updateLegislation(legislationId, data, token))
  }

  _populateSavedData(populateData) {
    if (populateData) {
      this.setState({...this.state, showModal: false, legislation: this.state.savedData, savedData: null, })
    } else {
      this.setState({...this.state, showModal: false, savedData: null })
    }
    localStorage.removeItem('unsaved_legislation')
  }

  _handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      legislation: { ...this.state.legislation, [name]: value }
    });
  }

  render () {
    const legislation = this.state.legislation

    var modal = null
    if (this.state.savedData && this.state.showModal) {
      modal = 
        <Modal
          show={this.state.showModal}
          header="Previous Data Found!"
          body="You have unsaved work, would you like to load it now?">
            <Button color="primary" onClick={() => this.populateSavedData(true)}>Accept</Button>
            <Button color="default" onClick={() => this.populateSavedData(false)}>Decline</Button>
        </Modal>
    }

    return (
      <EditorLayout onSubmit={this.handleSubmit}>
      {!this.props.isFetching ?
        <div className="row">
          <div className="col">
            {modal}
            <Editor>
              <LeftPanel>
                <div className="my-3 mx-5">
                <div id="firepad-container"></div>
                </div>
              </LeftPanel>
              <RightPanel>
                <div className="mx-5 my-5">
                <div id="firepad-post"></div>
                </div>
              </RightPanel>
            </Editor>
          </div>
        </div>
        : <div />
      }
      </EditorLayout>
    )
  }
}


function mapStateToProps(state) {

  var { legislation, auth } = state
  const isFetching = legislation.isFetching
  legislation = legislation.legislation
  const { isAuthenticated } = auth

  return {
    isFetching,
    legislation,
    isAuthenticated
  }
}
export default connect(mapStateToProps)(LegislationEditor)
