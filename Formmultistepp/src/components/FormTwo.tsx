import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './css/FormTwo.css';
import { useFormContext } from './Home'; // Importa o contexto

interface FormTwoProps {
  setStep: (step: number) => void;
}

interface FormValues {
  rating: number | null;
  comment: string;
}

const schema = yup.object().shape({
  rating: yup
    .number()
    .nullable()
    .required('Por favor, insira uma avaliação.')
    .min(1, 'A avaliação mínima é 1 estrela.'),
  comment: yup
    .string()
    .required('Por favor, insira um comentário.')
    .min(10, 'O comentário deve ter pelo menos 10 caracteres.'),
});

export function FormTwo({ setStep }: FormTwoProps) {
  const { setFormData } = useFormContext(); // Acessa o contexto

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      rating: null,
      comment: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    setFormData(prev => ({ ...prev, ...data })); // Atualiza os dados no contexto
    setStep(3); // Muda para o próximo step
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='inputCommit'>
        <h3>Você nos daria quantas estrelas ?</h3>
        <div className="star-rating">
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <>
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      value={value}
                      checked={field.value === value}
                      onChange={() => field.onChange(value)}
                    />
                    <span className={value <= (field.value || 0) ? "star filled" : "star"}>
                      &#9733;
                    </span>
                  </label>
                ))}
              </>
            )}
          />
        </div>
        {errors.rating && <p className="error">{errors.rating.message}</p>}
        <div>
          <label>
            Comentário:
            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <textarea className='comentInput'
                  {...field}
                  placeholder="Escreva seu comentário aqui..."
                />
              )}
            />
          </label>
          {errors.comment && <p className="error">{errors.comment.message}</p>}
        </div>
        
      </div>
      <button type="submit" className='btnFormTrueStep'>Avançar</button>
    </form>
  );
}