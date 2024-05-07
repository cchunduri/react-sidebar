import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'

interface SidebarProps {
    show: boolean,
    close: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ show, close }) => {

    return (
        show &&
        <div className='sidebar open'>
            <div className='sidebar-header'>
                <FontAwesomeIcon icon={faXmarkCircle} onClick={() => close()} />
                <span>Some Heading</span>
                <span></span>
            </div>

            <div className='sidebar-body'>
                <div className='sidebar-body-header'>
                    <span>Notes</span>
                </div>
                <div className='sidebar-body-content'>
                    <div className="sidebar-notes-patient-details">
                        <span>John Doe(JD)</span>
                        <span>DOB: 08/05/1990</span>
                    </div>

                    <div className="search-container">
                        <input type="text" placeholder="Search notes" />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>

                    <div className="notes-options">
                        <span>Total Notes: 5</span>
                        <span>Newest to Oldest</span>
                    </div>

                    <div className="sidebar-notes">
                        <ul>
                            <li>
                                <div className="notes-item">
                                    <span className="notes-item-header">
                                        <span>10/09/2021</span> -
                                        <span>John Smith</span>
                                    </span>
                                    <span className="notes-item-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper nisi.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="notes-item">
                                    <span className="notes-item-header">
                                        <span>10/08/2021</span> -
                                        <span>Jane Doe</span>
                                    </span>
                                    <span className="notes-item-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper nisi.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="notes-item">
                                    <span className="notes-item-header">
                                        <span>10/07/2021</span> -
                                        <span>John Doe</span>
                                    </span>
                                    <span className="notes-item-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper nisi.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="notes-item">
                                    <span className="notes-item-header">
                                        <span>10/06/2021</span> -
                                        <span>Jane Smith</span>
                                    </span>
                                    <span className="notes-item-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper nisi.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="notes-item">
                                    <span className="notes-item-header">
                                        <span>10/05/2021</span> -
                                        <span>John Doe</span>
                                    </span>
                                    <span className="notes-item-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper nisi.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="notes-item">
                                    <span className="notes-item-header">
                                        <span>10/05/2021</span> -
                                        <span>John Doe</span>
                                    </span>
                                    <span className="notes-item-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper nisi.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="notes-item">
                                    <span className="notes-item-header">
                                        <span>10/05/2021</span> -
                                        <span>John Doe</span>
                                    </span>
                                    <span className="notes-item-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper nisi.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='sidebar-footer'>
                <span></span>
                <button>Create Note</button>
                <button className="sidebar-footer-stop"> ^ </button>
            </div>
        </div>
    )
}

export default Sidebar