import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './css/FormOne.css';
import { useFormContext } from './Home'; // Importa o contexto

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  sobName: yup.string().required('Sobrenome é obrigatório')
});

interface IFormInput {
  name: string;
  email: string;
  sobName: string;
}

interface FormOneProps {
  setStep: (step: number) => void; // Recebe a função para mudar o step
}

export function FormOne({ setStep }: FormOneProps) {
  const { setFormData } = useFormContext(); // Acessa o contexto

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  // Função que será chamada ao submeter o formulário
  const onSubmit: SubmitHandler<IFormInput> = data => {
    setFormData(prev => ({ ...prev, ...data })); // Atualiza os dados no contexto
    setStep(2); // Muda para o próximo step
  };

  return (
    <div className='formInputOne'>
      <div>
        <h1>Preencha seus dados para prosseguir!</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formInputOneFather'>
          <label>
            <div><span>Nome </span></div>
            <input
              className='inputText'
              type="text"
              {...register('name')}
              placeholder='kevao'
            />
            {errors.name && <p className='error'>{errors.name.message}</p>}
          </label>
          <label>
            <div><span>Sobrenome </span></div>
            <input
              className='inputText'
              type="text"
              {...register('sobName')}
              placeholder='kevao'
            />
            {errors.sobName && <p className='error'>{errors.sobName.message}</p>}
          </label>
          <label>
            <div><span>Email </span></div>
            <input
              className='inputText'
              type="text"
              {...register('email')}
              placeholder='exampleemail@gmail.com'
            />
            {errors.email && <p className='error'>{errors.email.message}</p>}
          </label>

          <button type="submit" className='btnNext'>Próximo</button>
        </div>
      </form>
    </div>
  );
}
