const format = {
  toBirthDay: (date) => (date ? date.replace(/[^\d]/g, '').replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3') : ''),
  toCpf: (cpf) => (cpf ? cpf.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : ''),
  toCep: (cep) => (cep ? cep.replace(/[^\d]/g, '').replace(/(\d{5})(\d{3})/, '$1-$2') : ''),
  toPhone: (phone) => {
    const phoneToNumber = Number(phone);
    const phoneToString = String(phoneToNumber);
    return phone ? phoneToString.replace(/[^\d]/g, '').replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4') : '';
  },

};

export default format;
