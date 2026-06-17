import { Component, computed, input } from '@angular/core';
import { ModeloTransacao, TipoTransacao } from '../../modelos/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.css',
})
export class Transacao {
  transacao = input.required<ModeloTransacao>();

  valor = computed(() => {
    if (this.transacao().tipo === TipoTransacao.SAQUE) {
      return -this.transacao().valor;
    }
    return this.transacao().valor;
  });
}
