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

      // Get N8N webhook URL from environment variable
      const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

      if (!n8nWebhookUrl) {
        console.error("N8N_WEBHOOK_URL environment variable is not set");
        return res.status(500).json({ 
          error: "Webhook configuration is missing. Please contact support." 
        });
      }

      // Build URL with query parameters for GET request
      const url = new URL(n8nWebhookUrl);
      url.searchParams.append('name', name);
      url.searchParams.append('email', email);
      url.searchParams.append('message', message);
      url.searchParams.append('timestamp', new Date().toISOString());

      // Forward data to N8N webhook via GET request
      const response = await fetch(url.toString(), {
        method: "GET",
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
