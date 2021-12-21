import "./header.css"

export default function Header() {
    return (
        <div className="header">
           <div className="headerTitles">
               <span className="headerTitleSm"> MERN Stack</span>
                <span className=" headerTitlelg"> Blog </span>
           </div>
           <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="headerImg" />
        </div>
    )
}
