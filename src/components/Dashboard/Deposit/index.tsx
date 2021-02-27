import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { DepositContainer } from './style';
import { Button } from '../Payments/style';
import { FaArrowRight } from 'react-icons/fa';
import api from '../../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../../store';
import { Contas, Plano } from '../../../types/dash-board';
import { toast } from 'react-toastify';
import { MdCached } from 'react-icons/md';

import Input from '../../Input'
import { change_screen } from '../../../store/dashboard/actions';

const Deposit: React.FC = () => {

  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(true);
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [invoicePayment, setInvoicePayment] = useState(true);
  const store = useSelector((state: ApplicationStore) => state.user);

  const handleSubmit = useCallback(async (dataProps: object) => {

    setLoaded(false);
    const date = new Date();
    const referenceDate = new Date(date.setDate(date.getDate() - 1));
    const depositDate = new Date(data);

    const filteredData = data.trim();

    if (referenceDate > depositDate || filteredData === '') {
      setLoaded(true);
      return toast.error('Escolha outra data');
    }
    if (descricao.trim().length <= 2) {
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

      const { status } = await api.post('/lancamentos', {
        "conta": result.data.contaBanco.id,
        "data": filteredData,
        "descricao": descricao.trim(),
        "login": store?.login,
        "planoConta": invoicePayment ? resultPlan.data[2].id : resultPlan.data[0].id,
        "valor": valor,
      }, {
        headers: {
          Authorization: store?.token,
        }
      });

      if (status !== 200) throw new Error('Something went wrong with request');

      dispatch(change_screen('Transações'));
      
      toast.success(invoicePayment ? 'Pagamento realizado' : 'Depósito realizado');
      clearForm();
    }
    catch (err) {
      console.log(err);
      toast.error('Ocorreu algum erro ao tentar realizar o' + invoicePayment ? 'pagamento.' : 'depósito.');
    }
    setLoaded(true);
  }, [data, descricao, valor, store?.login, store?.token, dispatch, invoicePayment]);

  function clearForm() {
    setData('');
    setDescricao('');
    setValor(0);
  }

  if (loaded) {
    return (
      <DepositContainer>
        <div className="header-form">
          <p>
            { invoicePayment ? 'Realize o pagamento da sua fatura' : 'Realize o seu depósito' }
          </p>
          <Button onClick={ () => setInvoicePayment(!invoicePayment) }>
            <span>
              { invoicePayment ? 'Realizar depósito' : 'Realizar pagamento de fatura' }
            </span>
          </Button>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input name="date" value={data} onChange={e => setData(e.target.value)} type="date" />
          <Input name="description" value={descricao} onChange={e => setDescricao(e.target.value)} type="text" placeholder="Descrição" />
          <Input name="transferValue" value={valor ? valor : ''} onChange={e => setValor(Number(e.target.value))} type="number" placeholder="Qual o valor de sua transferência?" />

          <Button type='submit'>
            <span>
              { invoicePayment ? 'Pagar agora' : 'Depositar agora' }
            </span>
            <FaArrowRight color="#8c52e5" />
          </Button>
        </Form>
      </DepositContainer>
    )
  } else {
    return <MdCached color="#f0f0f0" size={200} />
  }
}

export default Deposit;