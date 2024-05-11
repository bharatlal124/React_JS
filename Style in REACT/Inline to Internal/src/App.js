import "./styles.css";
//create a object to store all the styles.
const styleObj = {
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  h3: {
    fontSize: "2rem", letterSpacing: 2
  },
  input: {
    padding: 10
  },
  div: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  canclebutton: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  },
  loginbutton: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
}
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form style={styleObj.form}
      // style={{
      //   width: "60%",
      //   margin: "50px auto",
      //   display: "flex",
      //   flexDirection: "column",
      //   gap: 20
      // }}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={styleObj.h3}>Sign Up</h3>
        <input style={styleObj.input} placeholder="Username" />
        <input style={styleObj.input} placeholder="Email" />
        <input style={styleObj.input} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div style={styleObj.div}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   gap: 20
        // }}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button style={styleObj.canclebutton}
          // style={{
          //   outline: "none",
          //   paddingBlock: 5,
          //   width: 100,
          //   backgroundColor: "red",
          //   color: "white",
          //   cursor: "pointer"
          // }}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button style={styleObj.loginbutton}
          // style={{
          //   outline: "none",
          //   paddingBlock: 5,
          //   width: 100,
          //   backgroundColor: "red",
          //   color: "white",
          //   cursor: "pointer"
          // }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
