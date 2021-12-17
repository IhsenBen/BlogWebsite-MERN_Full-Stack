import "./topbar.css"   

export default function topbar() {
    return (
        <div className="top">
         <div className="topLeft">
             <i className="topIcon fab fa-facebook-square"></i>
             <i className="topIcon fab fa-twitter-square"></i>
             <i className="topIcon fab fa-pinterest-square"></i>
             <i className="topIcon fab fa-instagram"></i>
              </div>

         <div className="topCenter">
             <ul className="topMenu">
                 <li className="topListItem">HOME</li>
                 <li className="topListItem">ABOUT</li>
                 <li className="topListItem">CONTACT</li>
                 <li className="topListItem">WRITE</li>
                 <li className="topListItem">LOGOUT</li>
             </ul>
         </div>
         <div className="topRight">
             <img className="topImg" src="https://c.tenor.com/ulx2Jsysht0AAAAi/cute-ka-sana-kaso-may-putok-ka-dog.gif" alt="" />
             <i className="topSearchIcon fas fa-search"></i>
         </div>
        </div>
    )
}
