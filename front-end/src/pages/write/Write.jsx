import './write.css';

export default function Write() {
  return (
    <div className="write">
      <img
      className="writeImg" 
      src="https://images.pexels.com/photos/3389531/pexels-photo-3389531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Write something..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Post</button>
      </form>
    </div>
  );
}
