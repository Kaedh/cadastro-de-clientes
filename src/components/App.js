import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import '../styles/app.css';
import format from '../utils/format';
import validation from '../utils/validation';
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [lostFormFocus, setLostFormFocus] = useState(false);
  const [deleteButtonWasPressed, setDeleteButtonWasPressed] = useState(false);
  const [customers, setCustomers] = useState(customersData);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const [isANewCustomer, setIsANewCustomer] = useState(false);
  const [isEditingACustomer, setIsEditingACustomer] = useState(false);
  const [formIsLocked, setFormIsLocked] = useState(true);

  const {
    register, handleSubmit, setValue, reset, trigger, formState: { errors },
  } = useForm();

  useEffect(() => {
    const results = customers.filter((customer) => {
      const fullName = `${customer.firstName} ${customer.lastName}`.toLocaleLowerCase().trim();
      return fullName.includes(searchTerm);
    });

    setFilteredCustomers(results);
  }, [searchTerm]);

  useEffect(() => { if (customers) setSelectedCustomer(customers[0]); }, []);

  useEffect(() => setFilteredCustomers(customers), [customers]);

  const renderCustomerData = (customer) => {
    setValue('firstName', customer.firstName);
    setValue('lastName', customer.lastName);
    setValue('socialName', customer.socialName);
    setValue('gender', customer.gender);
    setValue('cpf', format.toCpf(customer.cpf));
    setValue('birthDay', format.toBirthDay(customer.birthDay));
    setValue('cep', format.toCep(customer.cep));
    setValue('street', customer.street);
    setValue('district', customer.district);
    setValue('number', customer.number);
    setValue('city', customer.city);
    setValue('uf', customer.uf);
    setValue('complement', customer.complement);
    setValue('email', customer.email);
    setValue('phone', format.toPhone(customer.phone?.replace(/\D/g, '')));
  };

  const inputRegister = {
    firstName: register('firstName', validation.firstName),
    lastName: register('lastName', validation.lastName),
    socialName: register('socialName', validation.socialName),
    gender: register('gender', validation.gender),
    cpf: register('cpf', validation.cpf),
    birthDay: register('birthDay', validation.birthDay),
    cep: register('cep', validation.cep),
    street: register('street', validation.street),
    district: register('district', validation.district),
    number: register('number', validation.number),
    city: register('city', validation.city),
    uf: register('uf', validation.uf),
    complement: register('complement', validation.complement),
    email: register('email', validation.email),
    phone: register('phone', validation.phone),
  };

  useEffect(() => {
    if (formIsLocked) renderCustomerData(selectedCustomer);
  }, [selectedCustomer]);

  const onSubmit = (data) => {
    if (isANewCustomer) {
      const id = Math.floor(Math.random() * 10);
      const dataToBeSubmitted = { id, ...data };

      if (typeof dataToBeSubmitted.firstName === 'undefined') return null;

      setCustomers([...customers, { ...dataToBeSubmitted }]);
      setFormIsLocked(true);
      setIsANewCustomer(false);
    }

    if (isEditingACustomer) {
      const { id } = selectedCustomer;
      const dataToBeUpdated = { id, ...data };

      const dataToBeSubmitted = customers.map((customer) => {
        if (customer.id === id) return dataToBeUpdated;
        return customer;
      });

      setCustomers([...dataToBeSubmitted]);
      setFormIsLocked(true);
      setIsEditingACustomer(false);
    }

    return null;
  };

  const handleSearchBoxInput = (e) => setSearchTerm(e.target.value);

  const handleEditCustomer = () => {
    setIsEditingACustomer(true);
    setFormIsLocked(false);
  };

  const handleCustomerSelection = (e) => {
    const selected = filteredCustomers.find((customer) => customer.id === Number(e.target.id));

    setSelectedCustomer(selected);

    if (!formIsLocked) {
      setModalIsOpen(true);
      setLostFormFocus(true);
    }
  };

  const handleNewCustomerButton = () => {
    reset();
    setValue('cpf', '');
    setFormIsLocked(false);
    setIsANewCustomer(true);
  };

  const handleDeleteCustomerButton = () => {
    setDeleteButtonWasPressed(true);
    setModalIsOpen(true);
  };

  const modalLeftOption = () => {
    if (deleteButtonWasPressed) {
      const selectedId = selectedCustomer.id;
      setCustomers((prevValues) => prevValues.filter((customer) => customer.id !== selectedId));
      setModalIsOpen(false);
    }

    if (lostFormFocus) {
      renderCustomerData(selectedCustomer);
      setFormIsLocked(true);
      setModalIsOpen(false);
    }
  };

  const modalRightOption = () => setModalIsOpen(false);

  const validateInputOnChange = async (e, name) => {
    if (name === 'cpf') setValue('cpf', format.toCpf(e.target.value));
    if (name === 'birthDay') setValue('birthDay', format.toBirthDay(e.target.value));
    if (name === 'cep') setValue('cep', format.toCep(e.target.value));
    if (name === 'phone') setValue('phone', format.toPhone(e.target.value));

    setValue(name, e.target.value);
    await trigger(name);
  };

  return (
    <div className="app">
      <Modal
        isOpen={modalIsOpen}
        leftOption={modalLeftOption}
        rightOption={modalRightOption}
        alertMessage="Os dados do formulário não foram salvos,
                      tem certeza de que deseja sair desta página?"
      />
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
        <Button icon={addCostumerIcon} onClick={handleNewCustomerButton} />
      </div>

      <div className="right-container">
        <div className="btn-wrapper">
          <Button icon={editCustomerIcon} onClick={handleEditCustomer} />
          <Button icon={deleteCustomerIcon} onClick={handleDeleteCustomerButton} />
        </div>

        <form id="customer-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="form-row">
            <Input width="315" maxLength="20" placeholder="Nome" register={inputRegister.firstName} error={errors.firstName?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'firstName')} />
            <Input width="315" maxLength="20" placeholder="Sobrenome" register={inputRegister.lastName} error={errors.lastName?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'lastName')} />
          </div>

          <div className="form-row">
            <Input width="395" maxLength="20" placeholder="Nome Social" register={inputRegister.socialName} error={errors.socialName?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'socialName')} />
            <Input width="250" maxLength="10" placeholder="Gênero" register={inputRegister.gender} error={errors.gender?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'gender')} />
          </div>

          <div className="form-row">
            <Input width="375" maxLength="14" placeholder="CPF" register={inputRegister.cpf} error={errors.cpf?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'cpf')} />
            <Input width="250" maxLength="10" placeholder="Data de Nascimento" register={inputRegister.birthDay} error={errors.birthDay?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'birthDay')} />
          </div>

          <div className="form-row">
            <Input width="215" maxLength="9" placeholder="CEP" register={inputRegister.cep} error={errors.cep?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'cep')} />
            <Input width="395" maxLength="30" placeholder="Logradouro" register={inputRegister.street} error={errors.street?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'street')} />
          </div>

          <div className="form-row">
            <Input width="450" maxLength="30" placeholder="Bairro" register={inputRegister.district} error={errors.district?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'district')} />
            <Input width="175" maxLength="6" placeholder="Número" register={inputRegister.number} error={errors.number?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'number')} />
          </div>

          <div className="form-row">
            <Input width="410" maxLength="30" placeholder="Cidade" register={inputRegister.city} error={errors.city?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'city')} />
            <Input width="205" maxLength="2" placeholder="Estado" register={inputRegister.uf} error={errors.uf?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'uf')} />
          </div>

          <div className="form-row">
            <Input width="100" maxLength="30" placeholder="Complemento" register={inputRegister.complement} error={errors.complement?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'complement')} />
          </div>

          <div className="form-row">
            <Input width="395" maxLength="30" placeholder="E-mail" register={inputRegister.email} error={errors.email?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'email')} />
            <Input width="225" maxLength="16" placeholder="Telefone" register={inputRegister.phone} error={errors.phone?.message} disabled={formIsLocked} validate={(e) => validateInputOnChange(e, 'phone')} />
          </div>
        </form>

        <footer>
          <Button icon={saveCustomerIcon} form="customer-form" type="submit" />
        </footer>
      </div>
    </div>
  );
}

export default App;

/*
  [X] - Colocar mascaras de formularios
  [X] - Cria as regras de validações
  [ ] - Criar component Select pro genero
  [ ] - Criar fake API e consumir os dados dela
  [ ] - Scroll na lista de clientes
  [ ] - Auto preencher endereço ao digitar o CEP
*/
