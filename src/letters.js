const letters = {
  blank:  '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000',

  A:      '00010000' +
          '00010000' +
          '00101000' +
          '00101000' +
          '01000100' +
          '01111100' +
          '10000010' +
          '10000010',

  B:      '11111100' +
          '10000010' +
          '10000010' +
          '11111100' +
          '10000010' +
          '10000010' +
          '10000010' +
          '11111100',

  C:      '00111100' +
          '01000010' +
          '10000000' +
          '10000000' +
          '10000000' +
          '10000000' +
          '01000010' +
          '00111100',

  Ç:      '00111100' +
          '01000010' +
          '10000000' +
          '10000000' +
          '01000010' +
          '00111100' +
          '00001000' +
          '00011000',

  D:      '11111000' +
          '10000100' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10000100' +
          '11111000',

  E:      '11111110' +
          '10000000' +
          '10000000' +
          '11111000' +
          '10000000' +
          '10000000' +
          '10000000' +
          '11111110',

  F:      '11111110' +
          '10000000' +
          '10000000' +
          '11111000' +
          '10000000' +
          '10000000' +
          '10000000' +
          '10000000',

  G:      '00111100' +
          '01000010' +
          '10000000' +
          '10000000' +
          '10001110' +
          '10000010' +
          '01000010' +
          '00111110',

  H:      '10000010' +
          '10000010' +
          '10000010' +
          '11111110' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10000010',

  I:      '00010000' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000',

  J:      '00000010' +
          '00000010' +
          '00000010' +
          '00000010' +
          '00000010' +
          '10000010' +
          '01000100' +
          '00111000',

  K:      '10000010' +
          '10000100' +
          '10011000' +
          '11100000' +
          '10010000' +
          '10001000' +
          '10000100' +
          '10000010',

  L:      '10000000' +
          '10000000' +
          '10000000' +
          '10000000' +
          '10000000' +
          '10000000' +
          '10000000' +
          '11111110',

  M:      '10000010' +
          '11000110' +
          '10101010' +
          '10010010' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10000010',

  N:      '10000010' +
          '11000010' +
          '10100010' +
          '10010010' +
          '10010010' +
          '10001010' +
          '10000110' +
          '10000010',

  Ñ:      '10111010' +
          '11000010' +
          '10100010' +
          '10010010' +
          '10010010' +
          '10001010' +
          '10000110' +
          '10000010',

  O:      '00111000' +
          '01000100' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10000010' +
          '01000100' +
          '00111000',

  P:      '11111100' +
          '10000010' +
          '10000010' +
          '11111100' +
          '10000000' +
          '10000000' +
          '10000000' +
          '10000000',

  Q:      '00111000' +
          '01000100' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10001010' +
          '01000100' +
          '00111010',

  R:      '11111000' +
          '10000100' +
          '10000010' +
          '10000100' +
          '11111000' +
          '10000100' +
          '10000010' +
          '10000010',

  S:      '01111100' +
          '10000010' +
          '10000000' +
          '01111100' +
          '00000010' +
          '00000010' +
          '10000010' +
          '01111100',

  T:      '11111110' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000',

  U:      '10000010' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10000010' +
          '01000100' +
          '00111000',

  V:      '10000010' +
          '10000010' +
          '01000100' +
          '01000100' +
          '00101000' +
          '00101000' +
          '00010000' +
          '00010000',

  W:      '10000010' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10010010' +
          '01010100' +
          '00101000',

  X:      '10000010' +
          '01000100' +
          '00101000' +
          '00010000' +
          '00010000' +
          '00101000' +
          '01000100' +
          '10000010',

  Y:      '10000010' +
          '01000100' +
          '00101000' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00010000',

  Z:      '11111110' +
          '00000100' +
          '00001000' +
          '00010000' +
          '00100000' +
          '01000000' +
          '10000000' +
          '11111110',

  '+':    '00010000' +
          '00010000' +
          '00010000' +
          '11111110' +
          '00010000' +
          '00010000' +
          '00010000' +
          '00000000',

  '-':    '00000000' +
          '00000000' +
          '00000000' +
          '11111110' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000',

  ',':    '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00010000' +
          '00010000' +
          '00100000',

  '.':    '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00010000' +
          '00000000',

  'SPACE':'00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000' +
          '00000000',

  'Ú':    '00001000' +
          '00010000' +
          '10000010' +
          '10000010' +
          '10000010' +
          '10000010' +
          '01000100' +
          '00111000',

  'TAB':  '01000100' +
          '10101010' +
          '10010010' +
          '10000010' +
          '01000100' +
          '00101000' +
          '00010000' +
          '00010000',

  '1':    '00001000' +
          '00011000' +
          '00101000' +
          '00001000' +
          '00001000' +
          '00001000' +
          '00001000' +
          '00001000',

  '2':    '00111100' +
          '01000010' +
          '00000010' +
          '00000100' +
          '00001000' +
          '00010000' +
          '00100000' +
          '01111110',

  '3':    '00111100' +
          '01000010' +
          '00000010' +
          '00111100' +
          '00000010' +
          '00000010' +
          '01000010' +
          '00111100',

  '4':    '01000010' +
          '01000010' +
          '01000010' +
          '01111110' +
          '00000010' +
          '00000010' +
          '00000010' +
          '00000010',

  '5':    '01111110' +
          '01000000' +
          '01000000' +
          '01111000' +
          '00000100' +
          '00000010' +
          '00000100' +
          '01111000',

  '6':    '00111100' +
          '01000010' +
          '01000000' +
          '01011000' +
          '01100100' +
          '01000010' +
          '01000100' +
          '00111000',

  '7':    '01111110' +
          '00000010' +
          '00000100' +
          '00001000' +
          '00001000' +
          '00010000' +
          '00010000' +
          '00010000',

  '8':    '00111100' +
          '01000010' +
          '01000010' +
          '00111100' +
          '01000010' +
          '01000010' +
          '01000010' +
          '00111100',

  '9':    '00111100' +
          '01000010' +
          '01000010' +
          '01000010' +
          '00111110' +
          '00000010' +
          '00000010' +
          '00000010',

  '0':    '00111100' +
          '01000010' +
          '01000010' +
          '01000010' +
          '01000010' +
          '01000010' +
          '01000010' +
          '00111100',
};

export default letters;
