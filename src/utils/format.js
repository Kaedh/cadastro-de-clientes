const format = {
  toBirthDay: (date) => date.replace(/[^\d]/g, '').replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'),
  toCpf: (cpf) => cpf.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
  toCep: (cep) => cep.replace(/[^\d]/g, '').replace(/(\d{5})(\d{3})/, '$1-$2'),
  toPhone: (phone) => phone.replace(/[^\d]/g, '').replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4'),

};

export default format;
