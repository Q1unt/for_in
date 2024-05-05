const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

function orderByProps(obj, order) {
    const orderedProps = [];
    for (let prop of order) {
      if (prop in obj) {
        orderedProps.push({ key: prop, value: obj[prop] });
        delete obj[prop];
      };
    };
    const remainingProps = Object.keys(obj).sort();
    for (let prop of remainingProps) {
      orderedProps.push({ key: prop, value: obj[prop] });
    }
    return orderedProps;
  };

  export const orderby = orderByProps(obj, ["name", "level"]);
  console.log(orderby);