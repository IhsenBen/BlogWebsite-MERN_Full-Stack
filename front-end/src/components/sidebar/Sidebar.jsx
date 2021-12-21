import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/5231556/pexels-photo-5231556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fuga, nostrum nesciunt minima ab sapiente repellendus reprehenderit mollitia animi eum natus, provident enim accusantium.</p>

            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Media</li>
                <li className="sidebarListItem">Food</li>
                <li className="sidebarListItem">Nature</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
             <div className="sidebarSocial">
             <i className="sidebarIcon fab fa-facebook-square"></i>
             <i className="sidebarIcon fab fa-twitter-square"></i>
             <i className="sidebarIcon fab fa-pinterest-square"></i>
             <i className="sidebarIcon fab fa-instagram"></i>
             </div>

             </div>
        </div>
    )
}
