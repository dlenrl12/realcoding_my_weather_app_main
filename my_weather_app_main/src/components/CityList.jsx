function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;
  const citystyle = {
    background: "skyblue"
  };
  const hStyle = {
    color: "black",
    background: "skyblue",
    padding: ".375rem .75rem",
    border: "2px solid white",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
   };

  return (
    <div style={citystyle}>
      <h1>Citylist</h1>
      <img src = "https://pixnio.com/free-images/2017/10/27/2017-10-27-06-43-13-1100x733.jpg" alt = "city" width = "250px" height = "150px" />
      <h1 style={hStyle}>맛집 검색</h1>
      <div style = {hStyle}>
        <ul>
          {cities.map((item, index) => {
            const searchLink = "https://www.google.com/search?q=" + item + " 맛집";
            return <li key={index}><a href={searchLink} target="_blank">{item}</a></li>
            //return <li key={index}>{item}</li>;
           })}
        </ul>
      </div>
    </div>
  );
}

export default CityList;
