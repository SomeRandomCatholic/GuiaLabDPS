import styles from "./page.module.css";

// Tipo flecha
const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container_list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>

      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameClub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
          
                <li className={styles.container_list} key={jugador.id}>
                  <div>
                    <strong>{jugador.nombre}</strong>
                    <p>Altura: {jugador.Altura}m <br></br> Peso: {jugador.Peso}</p>
                  </div>
                  <img src={require(`${jugador.Imagen}`).default.src} alt="Imagen de jugador no disponible"></img>
                  <br></br>
                </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default function Home() {

  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        { "id": 1, "nombre": "David Alaba", "Altura": "1.75", "Peso": "74kg", "Imagen": "./images/eq1/j1.png" },
        { "id": 2, "nombre": "Fran García", "Altura": "1.82", "Peso": "74kg", "Imagen": "./images/eq1/j2.png" },
        { "id": 3, "nombre": "Daniel Carvajal", "Altura": "1.85", "Peso": "81kg", "Imagen": "./images/eq1/j3.png" },
      ]
    },
    {
      "id": 2,
      "nombre": "Barcelona",  
      "plantilla": [
        { "id": 1, "nombre": "Marc-André ter Stegen", "Altura": "1.75", "Peso": "74kg", "Imagen": "./images/eq2/j1.png" },
        { "id": 2, "nombre": "Iñigo Martinez", "Altura": "1.82", "Peso": "74kg", "Imagen": "./images/eq2/j2.png" },
        { "id": 3, "nombre": "Gavi", "Altura": "1.85", "Peso": "81kg", "Imagen": "./images/eq2/j3.png" },
      ]
    },
    {
      "id": 3,
      "nombre": "Atlético de Madrid",
      "plantilla": [
        { "id": 1, "nombre": "Jan Oblak", "Altura": "1.75", "Peso": "70kg", "Imagen": "./images/eq3/j1.png" },
        { "id": 2, "nombre": "Axel Witsel", "Altura": "1.82", "Peso": "80kg", "Imagen": "./images/eq3/j2.png" },
        { "id": 3, "nombre": "Javí Galán", "Altura": "1.85", "Peso": "73kg", "Imagen": "./images/eq3/j3.png" },
      ]
    },
    {
      "id": 4,
      "nombre": "Sevilla FC",
      "plantilla": [
        { "id": 1, "nombre": "Marco Dmitrovic", "Altura": "1.70", "Peso": "73kg", "Imagen": "./images/eq4/j1.png" },
        { "id": 2, "nombre": "Kike Salas", "Altura": "1.83", "Peso": "83kg", "Imagen": "./images/eq4/j2.png" },
        { "id": 3, "nombre": "Marcos Acuña", "Altura": "1.79", "Peso": "71kg", "Imagen": "./images/eq4/j3.png" },
      ]
    }
  ];
  return (

    <main className={styles.main}>

      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData}></Equipos>
      </div>
    </main>
  );
}
