import React from "react";
import "./App.css";

function App() {
  return (
    <div class="container">
      <html>
        <body>
          <img src="https://img.freepik.com/vetores-gratis/fundo-azul-moderno-com-impressao-digital-de-neon_23-2148363163.jpg"  style={{width:500, height:600, marginLeft:200, marginTop:50}}/>
          <form style={{ width:300, marginTop:100}}>
            <h2>Login</h2>
            <label>Email: </label>
            <input type='text' name="email"></input>
            <br></br>
            <label>Senha: </label>
            <input type='text' name="senha"></input> <br></br>
            <input type='submit' name="submit"></input>
          </form>
        </body>
      </html>
    </div>
  );
}

export default App;
