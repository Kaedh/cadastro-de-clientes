import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import '../styles/app.css';
import customersData from '../data/data';

import addCostumerIcon from '../assets/add.svg';
import editCustomerIcon from '../assets/edit.svg';
import deleteCustomerIcon from '../assets/delete.svg';
import saveCustomerIcon from '../assets/save.svg';

import Button from './Button';
import Card from './Card';
import Input from './Input';
import Modal from './Modal';
import SearchBox from './searchBox';

function App() {
  const [customers] = useState(customersData);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const [formIsLocked] = useState(true);

  const {
    register, handleSubmit, setValue, formState: { errors },
  } = useForm();

  useEffect(() => {
    const results = customers.filter((customer) => {
      const fullName = `${customer.firstName} ${customer.lastName}`.toLocaleLowerCase().trim();
      return fullName.includes(searchTerm);
    });

    setFilteredCustomers(results);
  }, [searchTerm]);

  useEffect(() => { if (customers) setSelectedCustomer(customers[0]); }, []);

  useEffect(() => {
    setValue('firstName', selectedCustomer.firstName);
    setValue('lastName', selectedCustomer.lastName);
    setValue('socialName', selectedCustomer.socialName);
    setValue('gender', selectedCustomer.gender);
    setValue('cpf', selectedCustomer.cpf);
    setValue('birthDay', selectedCustomer.birthDay);
    setValue('cep', selectedCustomer.cep);
    setValue('street', selectedCustomer.street);
    setValue('district', selectedCustomer.district);
    setValue('number', selectedCustomer.number);
    setValue('city', selectedCustomer.city);
    setValue('uf', selectedCustomer.uf);
    setValue('complement', selectedCustomer.complement);
    setValue('email', selectedCustomer.email);
    setValue('phone', selectedCustomer.phone);
  }, [selectedCustomer]);

  const onSubmit = () => () => {};

  const emptyFunction = () => { };

  const handleSearchBoxInput = (e) => setSearchTerm(e.target.value);
  const handleCustomerSelection = (e) => {
    const selected = filteredCustomers.find((customer) => customer.id === Number(e.target.id));
    setSelectedCustomer(selected);
  };

  return (
    <div className="app">
      <Modal isOpen={false} leftOption={emptyFunction} rightOption={emptyFunction} alertMessage="Leonardo tem um pau grandão" />
      <div className="left-container">
        <SearchBox onChange={handleSearchBoxInput} value={searchTerm} />
        <ul className="customer-list">
          { filteredCustomers.map((customer) => (
            <li key={customer.id}>
              <Card
                id={customer.id}
                firstName={customer.firstName}
                lastName={customer.lastName}
                onClick={handleCustomerSelection}
              />
            </li>
          )) }
        </ul>
        <Button icon={addCostumerIcon} onClick={emptyFunction} />
      </div>

      <div className="right-container">
        <div className="btn-wrapper">
          <Button icon={editCustomerIcon} onClick={emptyFunction} />
          <Button icon={deleteCustomerIcon} onClick={emptyFunction} />
        </div>

        <form id="customer-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <Input width="315" placeholder="Nome" register={() => register('firstName', { required: true })} error={errors.firstName?.type} disabled={formIsLocked} />
            <Input width="315" placeholder="Sobrenome" register={() => register('lastName', { required: true })} error={errors.lastName?.type} disabled={formIsLocked} />
          </div>

          <div className="form-row">
            <Input width="395" placeholder="Nome Social" register={() => register('socialName', { required: true })} error={errors.socialName?.type} disabled={formIsLocked} />
            <Input width="215" placeholder="Gênero" register={() => register('gender', { required: true })} error={errors.gender?.type} disabled={formIsLocked} />
          </div>

          <div className="form-row">
            <Input width="375" placeholder="CPF" register={() => register('cpf', { required: true })} error={errors.cpf?.type} disabled={formIsLocked} />
            <Input width="250" placeholder="Data de Nascimento" register={() => register('birthDay', { required: true })} error={errors.birthDay?.type} disabled={formIsLocked} />
          </div>

          <div className="form-row">
            <Input width="215" placeholder="CEP" register={() => register('cep', { required: true })} error={errors.cep?.type} disabled={formIsLocked} />
            <Input width="395" placeholder="Logradouro" register={() => register('street', { required: true })} error={errors.street?.type} disabled={formIsLocked} />
          </div>

          <div className="form-row">
            <Input width="450" placeholder="Bairro" register={() => register('district', { required: true })} error={errors.district?.type} disabled={formIsLocked} />
            <Input width="175" placeholder="Número" register={() => register('number', { required: true })} error={errors.number?.type} disabled={formIsLocked} />
          </div>

          <div className="form-row">
            <Input width="410" placeholder="Cidade" register={() => register('city', { required: true })} error={errors.city?.type} disabled={formIsLocked} />
            <Input width="205" placeholder="Estado" register={() => register('uf', { required: true })} error={errors.uf?.type} disabled={formIsLocked} />
          </div>

          <div className="form-row">
            <Input width="fit" placeholder="Complemento" register={() => register('complement', { required: true })} error={errors.complement?.type} disabled={formIsLocked} />
          </div>

          <div className="form-row">
            <Input width="395" placeholder="E-mail" register={() => register('email', { required: true })} error={errors.email?.type} disabled={formIsLocked} />
            <Input width="225" placeholder="Telefone" register={() => register('phone', { required: true })} error={errors.phone?.type} disabled={formIsLocked} />
          </div>
        </form>

        <footer>
          <span>* Campo obrigatório</span>
          <Button icon={saveCustomerIcon} form="customer-form" type="submit" onClick={emptyFunction} />
        </footer>
      </div>
    </div>
  );
}

export default App;

/*
 [X] - Quando usuario digitar algo na busca, a lista será filtrada;
 [ ] - Quando usuario clicar em algum cliente da lista, os dados serão mostrados na direita;
 [ ] - Quando usuario clicar em editar o formulário irá se tornar editavel.
 [ ] - Quando usuario clicar em deletar, o dados selecionados serão excluidos, mostrar alerta antes;
 [ ] - Quando usuario clicar em adicionar cliente, lado direito aparecerá um formulario em branco;
 [ ] - Quando usuario estiver digitando/editando um cliente e clicar em outro aparecerá um modal;
*/
