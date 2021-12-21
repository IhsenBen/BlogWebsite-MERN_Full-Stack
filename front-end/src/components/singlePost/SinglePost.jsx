import './singlePost.css';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-trash-alt"></i>
            <i className="singlePostIcon fas fa-edit"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            {' '}
            Author: <b>Ihsen</b>
          </span>
          <span className="singlePostDate"> 1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima non, eaque veritatis autem explicabo optio hic, dolore voluptatem nam consectetur tenetur soluta cupiditate labore alias libero? Quasi porro illum expedita, iure at, eum quae atque pariatur unde tempora libero nam obcaecati aliquam laboriosam? Harum pariatur ipsam, ipsa omnis officiis quas quos quo nostrum eum dolorem architecto, nulla ipsum cum, molestias odit vitae? Quidem ipsa ad dolor exercitationem earum, provident ea natus qui architecto vero error, ipsum adipisci aut iste.
        </p>
      </div>
    </div>
  );
}
