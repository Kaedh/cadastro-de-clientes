import React from 'react';
import { useForm } from 'react-hook-form';

import Input from './Input';

function App() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const inputValidations = {
    firstName: {
      required: { value: true, message: 'Por favor insira um nome' },
    },
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input
          mask="999.999.999-99"
          width={615}
          placeholder="Nome"
          register={() => register('firstName', inputValidations.firstName)}
          error={errors.firstName?.message}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
