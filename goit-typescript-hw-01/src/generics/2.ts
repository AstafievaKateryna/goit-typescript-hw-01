type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, keyof AllType>>(
  top: T,
  bottom: T
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top = { name: "Ball", color: "red", position: 1, weight: 2 };
const bottom = { name: "Cube", color: "blue", position: 2, weight: 5 };

const result = compare(top, bottom);
console.log(result);
