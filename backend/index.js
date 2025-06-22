// backend/index.js
import app from "./app.js";

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`✅ DharmGPT backend running at http://localhost:${PORT}`);
});
