import React, { Dispatch, FormEvent, HTMLAttributes, SetStateAction, useCallback, useEffect, useState } from 'react';
import { PlansContainer, CardPlans, ModalContainer, Modal, ModalForm } from './style';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import api from '../../services/api';
import { Plano } from '../../types/dash-board';
import { MdAdd, MdEventNote, MdClose } from 'react-icons/md';
import Loader from '../Loader';
import { UserData } from '../../store/user/types';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


const Plans: React.FC = () => {
  const store = useSelector( (state: ApplicationStore) => state.user );
  const [ plans, setPlans ] = useState<Plano[]>();
  const [ loaded, setLoaded ] = useState(false);

  const [ isAddingCard, setIsAddingCard ] = useState(false);

  const closeModal = useCallback(() => {
    setIsAddingCard(false);
  }, []);

  useEffect( () => {
    setLoaded(false);

    const getAccountPlans = async () => {
      const result = await api.get(`/lancamentos/planos-conta?login=${store?.login}`, {
        headers: {
          Authorization: store?.token,
        }
      });
      setPlans(result.data);
      setLoaded(true);
    }

    getAccountPlans();
  }, [ store?.login, store?.token ]);

  if (loaded) return (
    <>
      { isAddingCard && <AddPlansModal closeModal={ closeModal } setPlans={ setPlans } /> }
      <PlansContainer>

        {plans?.map( (plan, index) => {
          return ( 
          <CardPlans key={ index }>
            <p className="title-card">{plan.descricao}</p>
            <p>{plan.login}</p>
            <p className="type-movement">
              Movimentação tipo: <span>{plan.tipoMovimento}</span>
            </p>
          </CardPlans>);
        })}

        <CardPlans
          className="addCard"
          onClick={ () => setIsAddingCard(true) }
        >
          <MdAdd className="icon" size={ 50 } />
        </CardPlans>

      </PlansContainer>
    </>
  );

  else return <Loader style={{ border: 'solid #f0f0f0 4px' }} />
}


// Modal add Plans

interface AddPlansModalProps extends HTMLAttributes<HTMLDivElement> {
  setPlans: Dispatch<SetStateAction<Plano[] | undefined>>;
  closeModal: () => void;
  children?: React.ReactNode;
}

const AddPlansModal: React.FC<AddPlansModalProps> = ({ closeModal, setPlans, ...props }) => {

    const history = useHistory();

    const { token, login } = useSelector((store: ApplicationStore) => store.user as UserData);

    const [ type, setType ] = useState('');
    const [ description, setDescription ] = useState('');

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validação
      if ( type.length === 0 || description.length === 0 ) return toast.error('Preencha todos os campos!');;

      const data = {
        descricao: description,
        id: 0,
        login,
        padrao: true,
        tipoMovimento: type
      }

      api.post('lancamentos/planos-conta', data, { headers: {
        Authorization: token
      }}).then( response => {
        if ( response.status === 200 ) {
          setPlans((previewPlans) =>{
            if ( previewPlans ) {
              toast.success('Plano adicionado com sucesso!');
              return [ ...previewPlans, data ];
            }
          });
          closeModal();
        } else {
          toast.error('Ocorreu algum erro!');
          history.push('/error');
        }

      });
    }, [token, type, login, description, setPlans, closeModal, history]);

    return (
        <ModalContainer
          {...props}
        >
          <Modal>
            <MdClose onClick={ closeModal } className="icon" size={30} color="gray" />

            <h1> 
              <MdEventNote className="icon" />
              Adicionar um plano
            </h1>
            <ModalForm onSubmit={ handleSubmit } >
              <select>
                <option style={{ color: '#b3b3b3' }} value="">Escolha o tipo</option>
                <option value="R">Receita</option>
                <option value="D">Despesa</option>
                <option value="TC">Transferência entre contas</option>
                <option value="TU">Transferência entre usúarios</option>
              </select>
              <textarea 
                placeholder="Descrição do plano" 
                value={ description }
                onChange={ e => setDescription(e.target.value) }
              />

              <button
                type='submit'
              >
                <MdAdd size={18} />
                Adicionar
              </button>
            </ModalForm>
          </Modal>
        </ModalContainer>
    );
}

export default Plans;