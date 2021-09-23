import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

// get matrícula // 

app.get('/matricula', async (req, resp) => {
    try {
        let x = await db.tb_matricula.findAll();
        resp.send(x);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
});

//

// post matrícula //

app.post('/matricula', async (req, resp) => {
    try {
     let x = req.body;

     let y = await db.tb_matricula.create({
            nm_aluno: x.aluno,
            nr_chamada: x.chamada,
            nm_curso: x.curso,
            nm_turma:x.turma
        })

        resp.send(y);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

//

app.put('/matricula/:id', async (req,resp) => {
try {
    let id = req.params.id;
    let aluno = req.body.aluno;

    let r = await db.tb_matricula.update (
        {
            nm_aluno: aluno,
            nr_chamada: aluno,
            nm_curso: aluno,
            nm_turma: aluno
        },
        {
            where: { id_matricula: id}
        }
    );
    resp.send(r)
} catch(e) {
    resp.send({ erro: 'Ocorreu um erro!'})
}
})

//

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let r = await db.tb_matricula.destroy({where: {id_matricula: req.params.id} })

        resp.send(r);
    } catch (e) {
        resp.send({erro: "Ocorreu um erro!"});
    }
})

app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT }` ))