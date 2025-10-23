import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint - forwards to N8N webhook
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: "Missing required fields: name, email, and message are required" 
        });
      }

      // N8N webhook URL
      const n8nWebhookUrl = "https://pacema.app.n8n.cloud/webhook-test/e7e6e9e0-40ec-4b5d-b7ce-789be73215e5";

      // Forward data to N8N webhook
      const response = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`N8N webhook returned status ${response.status}`);
      }

      const data = await response.json().catch(() => ({}));

      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data 
      });
    } catch (error) {
      console.error("Error forwarding to N8N webhook:", error);
      res.status(500).json({ 
        error: "Failed to submit contact form. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
