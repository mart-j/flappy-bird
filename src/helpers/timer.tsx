export const timer = (ms: number, toggler: boolean) => {
  let newToggle = toggler;
  setTimeout(() => {
    newToggle = !toggler;
    console.log(newToggle);
    return newToggle;
  }, ms);
  
  
};
