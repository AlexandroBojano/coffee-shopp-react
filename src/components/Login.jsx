import "../css/Login.css"


const ValidInput = () => {

    
      alert("testing")
}


const Login = () => {

    return (

        <>

        <div className="login-container">


            <div className="login-info">

                <h1>Cofee Shopping</h1>
            <p>Voçê precisa fazer login</p>


            </div>


            <div className="input-data">

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"  placeholder="Seu melhoe email..." required/>

                <input type="password" name="password" id="password" placeholder="sua senha..." required/>
            </div>


            <div className="buttons">
                <button onClick={ValidInput} >Entrar</button>
            </div>

            
        </div>
          
        </>
    )
}

export default Login