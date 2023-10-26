import { Header } from './Header';

const main = () => {
  console.log('Loaded main 😺');

  const appElement = document.querySelector<HTMLDivElement>('.container');
  if (appElement === null) {
    return;
  }

  const header = new Header('.container');

  console.log(header);
};

main();
