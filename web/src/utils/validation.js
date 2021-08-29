const validation = {
  firstName: {
    required: { value: true, message: 'Inválido' },
    minLength: { value: 2, message: 'Inválido' },
    maxLength: { value: 20, message: 'Inválido' },
    pattern: { value: /^[A-zÀ-ú_ ]+$/, message: 'Inválido' },
  },
  lastName: {
    required: { value: true, message: 'Inválido' },
    minLength: { value: 2, message: 'Inválido' },
    maxLength: { value: 20, message: 'Inválido' },
    pattern: { value: /^[A-zÀ-ú_ ]+$/, message: 'Inválido' },
  },
  socialName: {
    minLength: { value: 2, message: 'Inválido' },
    maxLength: { value: 20, message: 'Inválido' },
    pattern: { value: /^[A-zÀ-ú_ ]+$/, message: 'Inválido' },
  },
  gender: {
    required: { value: true, message: 'Inválido' },
  },
  cpf: {
    required: { value: true, message: 'Inválido' },
    minLength: { value: 11, message: 'Inválido' },
    maxLength: { value: 14, message: 'Inválido' },
    pattern: { value: /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/, message: 'Inválido' },
  },
  birthDay: {
    required: { value: true, message: 'Inválido' },
    minLength: { value: 8, message: 'Inválido' },
    maxLength: { value: 10, message: 'Inválido' },
    pattern: { value: /^(?:0[1-9]|[12]\d|3[01])([/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/, message: 'Inválido' },

  },
  cep: {
    required: { value: true, message: 'Inválido' },
    minLength: { value: 8, message: 'Inválido' },
    maxLength: { value: 9, message: 'Inválido' },
    pattern: { value: /^\d{5}-\d{3}$/, message: 'Inválido' },
  },
  street: {
    required: { value: true, message: 'Inválido' },
    minLength: { value: 2, message: 'Inválido' },
    maxLength: { value: 30, message: 'Inválido' },
    pattern: { value: /^[A-zÀ-ú_ ]+$/, message: 'Inválido' },
  },
  district: {
    required: { value: true, message: 'Inválido' },
    minLength: { value: 2, message: 'Inválido' },
    maxLength: { value: 30, message: 'Inválido' },
    pattern: { value: /^[A-zÀ-ú_ ]+$/, message: 'Inválido' },
  },
  number: {
    required: { value: true, message: 'Inválido' },
    maxLength: { value: 6, message: 'Inválido' },
    pattern: { value: /^[0-9]+$/, message: 'Inválido' },
  },
  city: {
    required: { value: true, message: 'Inválido' },
    maxLength: { value: 30, message: 'Inválido' },
    pattern: { value: /^[A-zÀ-ú_ ]+$/, message: 'Inválido' },
  },
  uf: {
    required: { value: true, message: 'Inválido' },
    minLength: { value: 2, message: 'Inválido' },
    pattern: { value: /^[A-zÀ-ú]+$/, message: 'Inválido' },
  },
  complement: {
    maxLength: { value: 30, message: 'Inválido' },
    pattern: { value: /^[A-zÀ-ú_ ]+$/, message: 'Inválido' },
  },
  email: {
    required: { value: true, message: 'Inválido' },
    maxLength: { value: 30, message: 'Inválido' },
    pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, message: 'Inválido' },
  },
  phone: {
    required: { value: true, message: 'Inválido' },
    minLength: { value: 11, message: 'Inválido' },
    maxLength: { value: 16, message: 'Inválido' },
    pattern: { value: /^[0-9()-_ ]+$/, message: 'Inválido' },

  },

};

export default validation;
