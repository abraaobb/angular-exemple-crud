import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { AlunoModel } from './aluno.model';

@Component({
    selector: 'app-alunos',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
    aluno: AlunoModel = new AlunoModel();
    alunos: Array<any> = new Array();

    constructor(private alunosSerivice: AlunosService) {}

    ngOnInit(): void {
        this.listarAlunos();
    }

    listarAlunos() {
        this.alunosSerivice.listarAlunos().subscribe(
            (alunos) => {
                this.alunos = alunos;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    cadastrar() {
        console.log(this.aluno);
        this.alunosSerivice.cadastrarAluno(this.aluno).subscribe(
            (aluno) => {
                this.aluno = new AlunoModel();
                this.listarAlunos();
            },
            (err) => {
                console.error(err);
            }
        );
    }

    atualizar(id: number) {
        this.alunosSerivice.atualizarAluno(id, this.aluno).subscribe(
            (aluno) => {
                this.aluno = new AlunoModel();
                this.listarAlunos();
            },
            (err) => {
                console.error(err);
            }
        );
    }
    remover(id: number) {
        this.alunosSerivice.removerAluno(id).subscribe(
            (aluno) => {
                this.aluno = new AlunoModel();
                this.listarAlunos();
            },
            (err) => {
                console.error(err);
            }
        );
    }
}
