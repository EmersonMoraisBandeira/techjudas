require('dotenv').config();
const express = require('express');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(express.json());

// Endpoint POST para perguntar ao Gemini
app.post('/pergunte-ao-gemini', async (req, res) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = req.body.prompt;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    res.json({ resposta: response.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao processar a requisição' });
  }
});

// Endpoint GET para mensagem simples
app.get('/api/mensagem', (req, res) => {
  res.json({ mensagem: 'Integração concluída com sucesso!' });
});

app.listen(3000, () => console.log("Beleza, rodando"));
