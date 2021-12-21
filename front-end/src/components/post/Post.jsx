import "./post.css";

export default function Post() {
    return (
        <div className="post">
          <img className="postImg" src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Nature</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet.
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio mollitia qui neque optio minus voluptatum commodi, dignissimos ipsam minima hic cumque dicta eos molestiae quod nostrum eaque recusandae soluta. </p>
        </div>
    )
}
