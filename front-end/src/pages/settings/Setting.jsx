import Sidebar from '../../components/sidebar/Sidebar';
import './setting.css';

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Profile</span>
          <span className="settingDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://c.tenor.com/ulx2Jsysht0AAAAi/cute-ka-sana-kaso-may-putok-ka-dog.gif"
              alt=""
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fas fa-images"></i>
          
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label >UserName</label>
          <input type="text" placeholder="Ihsen" />
          <label >Email</label>
          <input type="email" placeholder="Ihsen@dev.com" />
          <label >Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
         
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
