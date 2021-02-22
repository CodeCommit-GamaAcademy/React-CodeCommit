import React, { useCallback, useState } from 'react';
import { DepositContainer } from './style';
import { Button, Form, FormInput } from '../Payments/style';
import { FaArrowRight } from 'react-icons/fa';
import { FormEvent } from 'react';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import { Contas, Plano } from '../../types/dash-board';
import { useHistory } from 'react-router-dom';



const Deposit: React.FC = () => {
  const history = useHistory();
  const [conta, setConta] = useState(0);
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [login, setLogin] = useState('');
  const [plano, setPlano] = useState(0);
  const [valor, setValor] = useState(0);
  const store = useSelector( (state: ApplicationStore) => state.user );
  
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    console.log(descricao);
    console.log(valor);
    const referenceDate = new Date();
    const date = new Date(data);
    if (referenceDate >= date || data === '') return alert('data incorreta');
    
    
    
    // try {
    //   const result = await api.get<Contas>(`/dashboard?fim=2021-02-22&inicio=2021-02-22&login=${store?.login}`, {
    //     headers: {
    //       Authorization: store?.token,
    //     }
    //   });
    //   const resultPlan = await api.get<Plano[]>(`/lancamentos/planos-conta?login=${store?.login}`, {
    //     headers: {
    //       Authorization: store?.token,
    //     }
    //   });
    //   const { data: response, status } = await api.post('/login', {
    //     "conta": result.data.contaBanco.id,
    //     "data": data,
    //     "descricao": descricao,
    //     "login": login,
    //     "planoConta": resultPlan.data[0].id,
    //     "valor": valor,
    //   });

    //   if (status !== 200) throw new Error('Something went wrong with request');

      

    //   history.push('/dashboard');
    // }
    // catch (err) {
    //   console.log(err);
    //   history.push('/error');
    // }

  }, [data, descricao, valor]);

  return (
    <DepositContainer>
      <Form onSubmit={handleSubmit}>
          <p>
            Realize o seu depósito
          </p>
          <FormInput value={data} onChange={e => setData(e.target.value)} type="date" />
          <FormInput value={descricao} onChange={e => setDescricao(e.target.value)} type="text" placeholder="Descrição" />
          <FormInput value={valor} onChange={e => setValor(Number(e.target.value))} type="text" placeholder="Qual o valor de sua transferência?" />

          <Button type='submit'>
            <span>Depositar agora</span>
            <FaArrowRight color="#8c52e5"/>
          </Button>
        </Form>
    </DepositContainer>
  );
}

export default Deposit;