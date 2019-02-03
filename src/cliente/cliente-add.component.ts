import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import isValidCpf from '@brazilian-utils/is-valid-cpf';
import { ToastrService } from 'ngx-toastr';
import { Cliente, Plano, Procedimento } from './cliente.model';
import { ClienteService } from './cliente.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
})
export class ClienteAddComponent implements OnInit {

  cliente: Cliente = new Cliente;

  planos: SelectItem[] = [];
  procedimentos: SelectItem[] = [];

  constructor(private clienteService: ClienteService, private toastService: ToastrService) {
  }

  ngOnInit() {
    this.cliente.plano = new Plano;
    this.cliente.procedimento = new Procedimento;
    this.buildDropDownPlanos();
    this.buildDropDownProcedimentos();
  }

  save(form: NgForm) {
    if (!isValidCpf(this.cliente.cpf)) {
      this.toastService.warning('CPF Inválido!');
      return;
    }
    if (!form.valid) {
      this.toastService.error('Todos os campos devem ser preenchidos corretamente!');
      return;
    }
    this.clienteService.save(this.cliente).subscribe(res => {
      this.toastService.success('Salvo com sucesso!');
      this.clearScreen();
    }, error => this.toastService.error('Erro ao salvar!'));
  }

  clearScreen() {
    this.cliente = new Cliente;
    this.cliente.plano = new Plano;
    this.cliente.procedimento = new Procedimento;
  }

  buildDropDownPlanos() {
    this.clienteService.getPlan().subscribe( (res: any) => {
      res.forEach( plano => {
        this.planos.push({label: plano.nome, value: plano.id});
      });
    }, error => {
      this.toastService.error('Erro ao buscar planos.');
    });
  }

  buildDropDownProcedimentos() {
    this.clienteService.getProcedimento().subscribe( (res: any) => {
      res.forEach( procedimento => {
        this.procedimentos.push({label: procedimento.nome, value: procedimento.id});
      });
    }, error => {
      this.toastService.error('Erro ao buscar procedimento.');
    });
  }


  validaCobertura() {
    if (this.cliente.plano.id && this.cliente.procedimento.id) {
      this.clienteService.getCoverage(this.cliente.plano.id, this.cliente.procedimento.id).subscribe(
        (res: number) => {
          if (res === 1) {
            this.toastService.success('Procedimento coberto pelo plano.');
          } else {
            this.toastService.error('Procedimento não coberto pelo plano.');
            this.cliente.plano = new Plano;
            this.cliente.procedimento = new Procedimento;
          }
        }
      )
    } else {
      return;
    }

  }
}
