// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve HTML/CSS/JS from "public" folder

// Dummy services data
const services = [
  { id: 1, name: "Hospitality", description: "Apply for a bed" },
  { id: 2, name: "Emergency Care", description: "24/7 emergency support" },
  { id: 3, name: "Chamber Service", description: "Book chamber appointments" },
];

// Route: Get services
app.get("/api/services", (req, res) => {
  res.json(services);
});

// Route: Book appointment
app.post("/api/appointment", (req, res) => {
  const { name, email, phone, service } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // In real app: save to database
  console.log("📌 New Appointment:", req.body);

  res.status(201).json({ message: "Appointment booked successfully!" });
});

// Route: Contact form
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  console.log("📩 New Contact Message:", req.body);
  res.json({ message: "Message received. We’ll contact you soon!" });
});

// Start server
app.listen(PORT, () => {
  console.log(✅ Server running at http://localhost:${PORT});
});