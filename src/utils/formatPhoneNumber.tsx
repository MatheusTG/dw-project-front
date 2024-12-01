export function formatPhoneNumber(phoneNumber: string) {
  // Remove todos os caracteres que não são números
  const numeros = phoneNumber.replace(/\D/g, '');

  // Verifica se o número tem código do país (por exemplo, +55)
  if (numeros.length === 13) {
    // Formato: +xx (dd) xxxxx-xxxx
    return `+${numeros.slice(0, 2)} (${numeros.slice(2, 4)}) ${numeros.slice(4, 9)}-${numeros.slice(9)}`;
  } else if (numeros.length === 11) {
    // Formato: (dd) xxxxx-xxxx
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  } else {
    return 'Número inválido';
  }
}
