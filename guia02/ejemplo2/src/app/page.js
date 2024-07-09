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
                <strong>{jugador.nombre}</strong>
                <p>Altura: {jugador.Altura}m <br></br> Peso: {jugador.Peso}</p>
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
        { "id": 1, "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74kg" },
        { "id": 2, "nombre": "Gonzalo García", "Altura": "1.82", "Peso": "74kg" },
        { "id": 3, "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81kg" },
      ]
    },
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla": [
        { "id": 1, "nombre": "Marc-André ter Stegen", "Altura": "1.75", "Peso": "74kg" },
        { "id": 2, "nombre": "Iñigo Martinez", "Altura": "1.82", "Peso": "74kg" },
        { "id": 3, "nombre": "Gavi", "Altura": "1.85", "Peso": "81kg" },
      ]
    },
    {
      "id": 3,
      "nombre": "Notre Dame",
      "plantilla": [
        { "id": 1, "nombre": "Antonio de Padua", "Altura": "1.75", "Peso": "70kg" },
        { "id": 2, "nombre": "Francisco de Asís", "Altura": "1.82", "Peso": "80kg" },
        { "id": 3, "nombre": "Tomás 'el Basado' Aquino", "Altura": "1.85", "Peso": "85kg" },
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
