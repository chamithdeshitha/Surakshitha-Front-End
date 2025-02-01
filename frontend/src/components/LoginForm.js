import React from "react";

const LoginForm = () => {
  return (
    <div style={styles.formContainer}>
      {/* Logo on top */}
      <img src="/surakshitha.png" alt="Logo" style={styles.logo} />

      {/* Login Form */}
      <div style={styles.form}>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button style={styles.button}>Log In →</button>
        <p style={styles.forgot}>Forgot password?</p>
        <button style={styles.createAccount}>Create New Account →</button>
      </div>
    </div>
  );
};

const styles = {
  formContainer: {
    position: "absolute",
    top: "40%",
    bottom: "-15%",
    right: "10%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "400px",
  },
  logo: {
    width: "400px",
    marginTop: "-70px",
    marginBottom: "-50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "17px",
  },
  input: {
    width: "95%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  forgot: {
    fontSize: "10px",
    color: "#555",
    cursor: "pointer",
    marginBottom: "10px",
    marginTop: "-10px",
  },
  createAccount: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default LoginForm;
