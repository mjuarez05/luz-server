import express from "express";
import cors from "cors";
import rpio from "rpio"; // Usamos rpio en lugar de onoff

const app = express();
app.use(cors());

const RELAY_PIN = 18; // Cambia al pin donde conectaste la lámpara

// Configurar el pin como salida
rpio.open(RELAY_PIN, rpio.OUTPUT, rpio.LOW);

// Encender la lámpara
app.get("/encender", (req, res) => {
  rpio.write(RELAY_PIN, rpio.HIGH);
  res.json({ status: "encendida" });
});

// Apagar la lámpara
app.get("/apagar", (req, res) => {
  rpio.write(RELAY_PIN, rpio.LOW);
  res.json({ status: "apagada" });
});

// Iniciar servidor en el puerto 5000
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
});
