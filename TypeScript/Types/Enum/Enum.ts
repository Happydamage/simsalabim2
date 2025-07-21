//Enums

type ValueOf<T> = T[keyof T];

const Color = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
} as const;

type Color = (typeof Color)[keyof typeof Color];
type Color1 = ValueOf<typeof Color>;

function setColor(color: Color1) {}
setColor(Color.RED);
//
