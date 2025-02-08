const Newsitem = ({ title, description, src, url }) => { // Destructuring props
  return (
    <div>
      <div className="card p-3 mb-5 bg-white rounded" style={{
        maxWidth: "350px",
        textAlign: "left", // Align content inside the card to the left
        margin: "10px", // Extra margin for spacing
      }}>
        <img src={src} style={{height:"200px" , width:"300px"}}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description ?description.slice(0,90):"custom description"}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
