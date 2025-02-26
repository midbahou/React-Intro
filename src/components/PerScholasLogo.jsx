function PerScholasLogo() {
    const imgURL = "https://perscholas.org/wp-content/themes/per-scholas/assets/images/logo1.svg";
    const alt = "Per Scholas";

  return (
  <img 
  src={imgURL} 
  alt={alt}
  style = {{
    display: "flex",
    margin: "1em auto"
  }}
  />
  )
}

export default PerScholasLogo;