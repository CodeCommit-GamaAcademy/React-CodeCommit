import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { FaArrowRight } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { MdCached } from 'react-icons/md';

import { PaymentsContainer, Button } from './style';
import { ApplicationStore } from '../../../store';
import api from '../../../services/api';
import { Contas, Plano } from '../../../types/dash-board';
import Input from '../../Input';

interface PaymentsProps {
  func: Function;
}

const Payments: React.FC<PaymentsProps> = (props) => {

  const [loaded, setLoaded] = useState(true);
  const [destinatario, setDestinatario] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);

  const store = useSelector((state: ApplicationStore) => state.user);

  const handleSubmit = useCallback(async (dataProps: object) => {
    setLoaded(false);
    const date = new Date();
    const referenceDate = new Date(date.setDate(date.getDate() - 1));
    const depositDate = new Date(data);

    if (destinatario.trim().length === 0) {
      setLoaded(true);
      return toast.error('Login do destinatário não pode ser nulo')
    }
    if (referenceDate > depositDate || data === '') {
      setLoaded(true);
      return toast.error('Escolha outra data');
    }
    if (descricao.length < 3) {
      setLoaded(true);
      return toast.error('Descrição não pode ser nula');
    }
    if (valor <= 0) {
      setLoaded(true);
      return toast.error('Valor para transferencia deve ser maior que 0');
    }

    try {
      const result = await api.get<Contas>(`/dashboard?fim=2021-02-22&inicio=2021-02-22&login=${store?.login}`, {
        headers: {
          Authorization: store?.token,
        }
      });

      const resultPlan = await api.get<Plano[]>(`/lancamentos/planos-conta?login=${store?.login}`, {
        headers: {
          Authorization: store?.token,
        }
      });

      if (result.data.contaBanco.saldo < valor) {
        toast.error('Saldo insuficiente.');
        setLoaded(true);
        return;
      }

      const { status } = await api.post('/lancamentos', {
        "conta": result.data.contaBanco.id,
        "contaDestino": destinatario.trim(),
        "data": data,
        "descricao": descricao,
        "login": store?.login,
        "planoConta": resultPlan.data[3].id,
        "valor": valor,
      }, {
        headers: {
          Authorization: store?.token,
        }
      });

      if (status !== 200) throw new Error('Something went wrong with request');
      toast.success('Pagamento realizado com sucesso.');
    }
    catch (err) {
      console.log(err);
      toast.error('Ocorreu algum erro ao tentar realizar o depósito.');
    }
    setLoaded(true);
  }, [destinatario, data, descricao, valor, store?.login, store?.token]);

  if (loaded) {
    return (
      <>
        <PaymentsContainer>
          <Form onSubmit={handleSubmit}>
            <p>
              Informe os dados para realizar sua transferência
            </p>

            <Input name="receiver" value={destinatario} onChange={e => setDestinatario(e.target.value)} type="text" placeholder="Login do destinatário" />
            <Input name="date" value={data} onChange={e => setData(e.target.value)} type="date" />
            <Input name="description" value={descricao} onChange={e => setDescricao(e.target.value)} type="text" placeholder="Descrição" />
            <Input name="transferValur" value={valor} onChange={e => setValor(Number(e.target.value))} type="text" placeholder="Qual o valor de sua transferência?" />

            <Button type="submit">
              <span>Transferir agora</span>
              <FaArrowRight color="#8c52e5" />
            </Button>
          </Form>


        </PaymentsContainer>
      </>
    );
  } else {
    return <MdCached color="#f0f0f0" size={200} />
  }
}

export default Payments;