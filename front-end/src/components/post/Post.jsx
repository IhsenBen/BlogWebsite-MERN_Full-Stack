import "./post.css";
// the prop post is coming from the value p in <posts component < home component
export default function Post({post}) {
    return (
        <div className="post">
          {post.photo && ( <img className="postImg" src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />)}
         
        
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Nature</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            {post.title}
          </span>
          <hr />
          {/* note to self: this todate js method is really useful ( auto conversion to client friendly date+ string) */}
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc"> {post.desc} </p>
        </div>
    )
}
