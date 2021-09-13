import './App.css';

function App() {
  return (
    <div className="conteiner">
      <div className="barra-lateral">
        <div className="site">
         <img src="../../assets/images/book.svg" alt="" /> <div className="pink">Dev</div>School
        </div>
          <div className ="linha"></div>
        <div className="gerenciamento">
            Gerenciamento <img src="../../assets/images/down.svg" />
        </div>
        <div className="alunos"><img src="../../assets/images/linha.svg"/><p>Alunos</p></div>
      </div>

      <div className="tela-principal">
        <div className="cabecalho">
          <div className="usuario">
            <img src="../../assets/images/bruno.svg" /> <div className="bolinha">&nbsp; 3</div>Olá, Bruno de Oliveira
          </div>

          <div className="botoes1">
            <img src="../../assets/images/atualizar.svg" />
            <img src="../../assets/images/log-out.svg" />
          </div>
        </div> 

        <div className="box-novo-aluno">
            <div className="bm-titulo">
              <img src="" />Novo Aluno
            </div>

            <div className="formulario">
              <form>
                <label>
                  Nome:
                  <input type="text" name="name" />
                </label>
                <label>
                  Curso:
                  <input type="text" name="curso" />
                </label>
                <label>
                  Chamada:
                  <input type="text" name="chamada" />
                </label>
                <label>
                  Turma:
                  <input type="text" name="turma" />
                </label>
              
                <div className="botao"><button>Cadastrar</button></div>
              </form>
            </div>
        </div>
        
        <div className="box-alunos-matriculados">
          <div className="bm-titulo">
            <img src="../../assets/images/linha.svg"/>Alunos Matriculados
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Chamada</th>
                <th>Turma</th>
                <th>Curso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>opa</td>
                <td>opa</td>
                <td>opa</td>
                <td>opa</td>
                <td>opa</td