import './Search.css'
export default function Search() {
    return (
        <div style={{
  display: "flex",
  alignItems: "center",
  border: "2px solid white",
  padding: "6px 10px",
  borderRadius: "10px",
  width: "220px",
  height:"50px",
  color:"white"
}}>
  <input
    type="text"
    placeholder="Search"
    color='white'
    style={{
      border: "none",
      outline: "none",
      flex: 1,
      fontSize: "16px",
      color: "white",
      backgroundColor: "transparent"
    }}
  />
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ color: "white" }}>
    <path
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M9 17a8 8 0 100-16 8 8 0 000 16z"
    />
  </svg>
</div>


    )
}