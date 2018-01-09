import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import './DevelopersDialog.css';

class DevelopersDialog extends React.Component{
    constructor(props){
        super(props);
    }
    handleDialogClose = () =>{
        this.props.handleDialogClose();
    }
    render(){
        const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleDialogClose}
      />,
    ];
        return (
            <Dialog
            title="Developers & Designers"
            bodyClassName="dialog-body"
            actions={actions}
            modal={false}
            open={this.props.dialogOpen}
            onRequestClose={this.handleDialogClose}
            autoScrollBodyContent={true}
            autoDetectWindowHeight={true}
            actionsContainerClassName="modal-footer"
            titleClassName="modal-header"
            contentClassName="modal-content"
            >
              <div className="modal-developers">
                <div className="">
                  <div className="about-flexBox dialog-flexbox">
                      <div className="dialog-item">
                        <Paper zDepth={2} className="about-dialog-paper" style={{padding:'1rem'}}>

                          <img src="/svg/developers/rahul-krishna.jpeg" className="circle responsive-img" style={{width:'85%',marginLeft:'auto',marginRight:'auto'}} />
                          <h4 className="center margin-bottom-0">Rahul Krishna</h4>
                          <h5 className="center developers-position margin-top-0" style={{color:'#9E9E9E'}}>Frontend developer</h5>
                          <a href="https://github.com/rahulakrishna" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>

                        </Paper>
                      </div>
                      <div className="dialog-item">
                        <Paper zDepth={2} className="about-dialog-paper" style={{padding:'1rem'}}>
                          <img src="/svg/developers/harshit-kedia.jpeg" className="circle responsive-img" style={{width:'85%',marginLeft:'auto',marginRight:'auto'}} />
                          <h4 className="center margin-bottom-0">Harshit Kedia</h4>
                          <h5 className="center developers-position margin-top-0" style={{color:'#9E9E9E'}}>Frontend developer</h5>
                          <a href="https://github.com/hkedia321" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                        </Paper>
                      </div>
                      <div className="dialog-item">
                        <Paper zDepth={2} className="about-dialog-paper" style={{padding:'1rem'}}>
                          <img src="/svg/developers/rajat-mukati.jpg" className="circle responsive-img" style={{width:'85%',marginLeft:'auto',marginRight:'auto'}} />
                          <h4 className="center margin-bottom-0">Rajat Mukati</h4>
                          <h5 className="center developers-position margin-top-0" style={{color:'#9E9E9E'}}>Designer</h5>
                          <a href="https://www.facebook.com/rajatmukati005" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                        </Paper>
                      </div>
                      <div className="dialog-item">
                        <Paper zDepth={2} className="about-dialog-paper" style={{padding:'1rem'}}>
                          <img src="/svg/developers/apurva-nitanjay.jpeg" className="circle responsive-img" style={{width:'85%',marginLeft:'auto',marginRight:'auto'}} />
                          <h4 className="center margin-bottom-0">Apurva Nitanjay</h4>
                          <h5 className="center developers-position margin-top-0" style={{color:'#9E9E9E'}}>Backend developer</h5>
                          <a href="https://github.com/apuayush/" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                        </Paper>
                      </div>
                      <div className="dialog-item">
                        <Paper zDepth={2} className="about-dialog-paper" style={{padding:'1rem'}}>
                          <img src="/svg/developers/ujjwal-verma.jpeg" className="circle responsive-img" style={{width:'85%',marginLeft:'auto',marginRight:'auto'}} />
                          <h4 className="center margin-bottom-0">Ujwal Verma</h4>
                          <h5 className="center developers-position margin-top-0" style={{color:'#9E9E9E'}}>Backend developer</h5>
                          <a href="https://github.com/ujjwal96" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                        </Paper>
                      </div>
                  </div>
                </div>
              </div>
            </Dialog>
        )
    }
}

export default DevelopersDialog;
