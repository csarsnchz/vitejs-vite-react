//export function App() {
//  return <h1>Hola Mundo!!!</h1>;
//}

const neWMessage = (valor) => {
  if (valor) {
    return (
      <>
        <h2>Esto es una funcion con param: </h2>
        <h3>{valor}</h3>
      </>
    );
  } else {
    return (
      <>
        <h2>Esto es una funcion sin param </h2>
      </>
    );
  }
};

export const HelloWorldApp = () => {
  return (
    <>
      <h1>{neWMessage()}</h1>
      <p>Subtitulo</p>
    </>
  );
};
