import React from 'react'
import './userRegistration.css'

const UserRegistration = () => {




  return (
    <div id="form">

      <form action="">
        <h2 className="title">Cadastrar usuário</h2>



        <label htmlFor="opcao"><strong><h3>Você é?</h3></strong></label>
      <div className="opcao">
        <label>
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
          <input type="radio" name="opcao" value="fornecedor" required> Fornecedor</input>
        </label>
        <label>
          <i className="fa fa-home" aria-hidden="true"></i>
          <input type="radio" name="opcao" value="consumidor" required> Consumidor</input>
        </label>
      </div>

      <label htmlFor="username">Nome</label>
      <div className="input">
        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        <input id="username" name="username" placeholder="Username" type="text" required/> 
      </div>

      <label htmlFor="E-mail">E-mail</label>
      <div className="input">
        <i className="fa-regular fa-envelope"></i>
        <input id="e-mail" name="e-mail" placeholder="E-mail" type="text" required/>
      </div>

      <label htmlFor="password" > Senha </label>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input id="senha" name="senha" placeholder="Password " type="passoword" required/>
      </div>

      <label htmlFor="data">Data de Nascimento</label>
      <div className="input">
        <input id="Data_Nascimento" name="Data_Nascimento" placeholder="DD/MM/AAAA" type="date" required/>
      </div>


      <label htmlFor="cep" > Insira seu CEP </label>
      <div className="input">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <input id="cep" name="cep" placeholder="00000000 " type="text" maxLength={8} required/>

      </div>

      <label htmlFor="rua" > Rua </label>
      <div className="input">

        <input id="rua" name="rua" type="text"/>

      </div>

      <label htmlFor="bairro" > Bairro </label>
      <div className="input">

        <input id="bairro" name="bairro" type="text"/>
      </div>

      <label htmlFor="cidade" > Cidade </label>
      <div className="input">

        <input id="cidade" name="cidade" type="text"/>
      </div>

      <label htmlFor="estado" > Estado </label>
      <div className="input">

        <input id="estado" name="estado" type="text"/>
      </div>

      <a href="descobrir-cep.html"> Não sabe seu CEP?</a>

      <div id="btn">
        <button type="submit"> Cadastrar</button>
      </div>



    </form>
        
    </div >
    
  )
}

export default UserRegistration