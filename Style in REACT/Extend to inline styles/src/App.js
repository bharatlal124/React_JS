// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form className="" style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        margin: "auto",
        width: "250px",
        height: "225px",
        padding: "2rem"
      }}>
        <h1>Register Form</h1>
        <input type="text" placeholder="Name" className="form-input" style={{
          width: "100%",
          paddingBlock: "0.5rem",
          border: '1px solid black',
          borderRadius: "5px"
        }} />
        <input type="email" placeholder="Email" className="form-input" style={{
          width: "100%",
          paddingBlock: "0.5rem",
          border: '1px solid black',
          borderRadius: "5px"
        }} />
        <input type="password" placeholder="Password" className="form-input" style={{
          width: "100%",
          paddingBlock: "0.5rem",
          border: '1px solid black',
          borderRadius: "5px"
        }} />
        <button style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          paddingBlock: "0.5rem",
          fontSize: "1.035rem"
        }} className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
