import {GrFormClose} from 'react-icons/gr'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdWarning, MdInfo} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="alert-container">
    <h1>Alert Notifications</h1>
    <Notification>
      <div className="icons-card">
        <AiFillCheckCircle className="icons success" />
      </div>
      <div className="info-container">
        <h1 className="success">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
      <div className="cross-icon-card">
        <GrFormClose className="cross-icon" />
      </div>
    </Notification>
    <Notification>
      <div className="icons-card">
        <RiErrorWarningFill className="icons alert" />
      </div>
      <div className="info-container">
        <h1 className="alert">Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
      <div className="cross-icon-card">
        <GrFormClose className="cross-icon" />
      </div>
    </Notification>
    <Notification>
      <div className="icons-card">
        <MdWarning className="icons warning" />
      </div>
      <div className="info-container">
        <h1 className="warning">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
      <div className="cross-icon-card">
        <GrFormClose className="cross-icon" />
      </div>
    </Notification>
    <Notification>
      <div className="icons-card">
        <MdInfo className="icons info" />
      </div>
      <div className="info-container">
        <h1 className="info">info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
      <div className="cross-icon-card">
        <GrFormClose className="cross-icon" />
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
