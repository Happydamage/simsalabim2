interface Address {
  city?: string;
  street?: string;
  coords: number[];
}

type User = {
  firstName: string;
  age?: number;
  address: Address;
};

type ComponentProps = {
  className: string;
  color: 'red' | 'green';
};

type ApiResponse<T> = {
  status: 'success' | 'error';
  data: T;
};

type onClick = () => void;

//Литералы

type Color = 'red' | 'green' | 'blue';
type Size = 4 | 5 | 6 | 8 | 12;

const color: Color = 'red';
const values = {
  color: 'green',
} as const;

function paint(color: Color) {}

paint(values.color);
//

type EventName = 'click' | 'change';

type EventHandler = `on${EventName}`;

type UserId = `user_id_${string}`;
