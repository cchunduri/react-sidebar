import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css'

interface SidebarProps {
    show: boolean,
    close: () => void
}

const Sidebar: React.FC<SidebarProps> = ({show, close}) => {

    return (
        show &&
        <div className='sidebar open'>
            <div className='sidebar-header'>
                <FontAwesomeIcon icon={faXmarkCircle} onClick={() => close()} />
                <span>Scheduling Notes</span>
                <span></span>
            </div>

            <div className='sidebar-body'>
                <div className='sidebar-body-header'>
                    <span>Schedule Patient</span>
                    <span>Notes</span>
                    <span>Edits</span>
                    <span>Availablity</span>
                    <span>Providers List</span>
                </div>
                <div className='sidebar-body-content'>
                    <div className='schedule-patients-tab'>
                        <div className="sp-tab-body">
                            <span>Kristin Watts(CB)</span>
                            <span>DOB: 04.02.1992</span>
                        </div>
                        <div className="sp-tab-footer">
                            <button>Cancel</button>
                            <button>Schedule</button>
                        </div>
                    </div>
                    {/* <div className='notes-tab'>
                        <span>Meeting with Jane</span>
                        <span>10/11/2021</span>
                    </div>
                    <div className='sidebar-body-content-item'>
                        <span>Meeting with Jane</span>
                        <span>10/11/2021</span>
                    </div>
                    <div className='sidebar-body-content-item'>
                        <span>Meeting with Jane</span>
                        <span>10/11/2021</span>
                    </div>
                    <div className='sidebar-body-content-item'>
                        <span>Meeting with Jane</span>
                        <span>10/11/2021</span>
                    </div> */}
                </div>
            </div>

            <div className='sidebar-footer'>
            </div>
        </div>
    )
}

export default Sidebar