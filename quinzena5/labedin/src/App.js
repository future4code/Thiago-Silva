import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './img/email.png'
import local from './img/local.png'
import labenu from './img/labenu.png'
import uninter from './img/uninter.png'
import multiloja from './img/multiloja.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQG9gBEcqpEbGA/profile-displayphoto-shrink_200_200/0/1606917451315?e=1613606400&v=beta&t=W3AssdwgIdUw1L0z1USYpnxB2twgr9ENc9ignR9zXMw"
          nome="Thiago da Silva"
          descricao="Oi, eu sou o Thiago. Estou estudando para me tornar um desenvolvedor solucionador, com tecnologia humanizada, ou seja, o desenvolvedor que consegue entender os gaps do mundo e transcrever soluções em código, isso é o futuro, o meu futuro."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem={email}
          tipo="E-mail: "
          contato="thiago@email.com"
        />

        <CardPequeno
          imagem={local}
          tipo="Endereço: "
          contato="Rua do Futuro, 73"
        />
      </div>
      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande
          imagem={labenu}
          nome="Front End com React"
          descricao="Aprendizado voltado a prática"
        />

        <CardPequeno
          imagem={uninter}
          tipo="Curso: "
          contato="Pós Graduação em Formação Docente EAD"
        />

        <CardPequeno
          imagem={uninter}
          tipo="Curso: "
          contato="Análise e Desenvolvimento de Sistemas"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={uninter}
          nome="Uninter"
          descricao="Ajudando alunos a entender o sistema"
        />

        <CardGrande
          imagem="https://lh4.googleusercontent.com/-n-GxuySaHHk/AAAAAAAAAAI/AAAAAAAAAAA/o7omfb7KgXo/s44-p-k-no-ns-nd/photo.jpg"
          nome="Fonzaghi"
          descricao="Auxiliando o programador a realizar pequenas features do sistema de compras"
        />

        <CardGrande
          imagem={multiloja}
          nome="Multiloja"
          descricao="Atualizando a grade de produtos do ecommerce"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
