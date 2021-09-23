import './App.css';

import { useState } from 'react';


import Api from '../service/api.js';
const api = new Api();

export default function App () {
  const [aluno, setAluno] = useState([]);
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [chamada, setChamada] = useState('');
  const [turma, setTurma] = useState('');


   
  return (
      <div className="conteiner">
        <div className="barra-lateral">
          <div className="site">
          <img src="../../assets/images/book.svg" alt="" /> <div className="pink">Dev</div>School
          </div>
            <div className ="linha"></div>
          <div className="gerenciamento">
              Gerenciamento <img src="../../assets/images/down.svg" alt="" />
          </div>
          <div className="alunos"><img src="../../assets/images/linha.svg" alt=""/><p>Alunos</p></div>
        </div>

        <div className="tela-principal">
          <div className="cabecalho">
            <div className="usuario">
              <img src="../../assets/images/bruno.svg" alt="" /> <div className="bolinha">&nbsp; 3</div>Olá, Bruno de Oliveira
            </div>

            <div className="botoes1">
              <img src="../../assets/images/atualizar.svg" alt=""/>
              <img src="../../assets/images/log-out.svg" alt="" />
            </div>
          </div> 
          <div className="form-novo-aluno">
              <div className="novo-aluno">
                <img src="../../assets/images/linha.svg" alt="" /> <p>Novo Aluno</p>
              </div>

              <div className="esquerdo">
                <div className="agp-input">
                  <label>Nome:</label><input type="text" name="nome" />
                  <label>Curso:</label><input type="text" name="curso" />
                </div>
                <div className="agp-ut">
                  <label>Chamada:</label><input type="text" name="chamada" />
                  <label>Turma:</label><input type="text" name="turma" />
                </div>
              </div>


          </div>



        </div>
    </div>
  )
}


