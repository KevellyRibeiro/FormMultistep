import React from 'react';
import { useFormContext } from './Home';

export function FormTree() {
  const { formData } = useFormContext(); // Acessa os dados do contexto

  return (
    <div>
      <h2>Resumo dos Dados</h2>
      <p><strong>Nome:</strong> {formData.name}</p>
      <p><strong>Sobrenome:</strong> {formData.sobName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Avaliação:</strong> {formData.rating} estrelas</p>
      <p><strong>Comentário:</strong> {formData.comment}</p>
    </div>
  );
}