"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Telegram bot configuration
const TELEGRAM_BOT_TOKEN = "7775092891:AAFaGhHTmjvO_oyN0Fa2z9XT_--B6-KXeDk";
const TELEGRAM_CHAT_ID = "1790327982";

// Function to send message to Telegram
const sendToTelegram = async (message: string) => {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await response.json();
    if (!data.ok) {
      throw new Error(data.description || "Failed to send message to Telegram");
    }
    return true;
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return false;
  }
};

// Format login data for Telegram
const formatLoginForTelegram = (email: string, success: boolean, ipAddress = "Unknown") => {
  const status = success ? "✅ SUCCESSFUL" : "❌ FAILED";

  return `🔐 <b>Login Attempt ${status}</b>

<b>Email:</b> ${email}
<b>Status:</b> ${success ? "Successful" : "Failed"}
<b>IP Address:</b> ${ipAddress}
<b>Time:</b> ${new Date().toLocaleString()}`;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // This is just for demo purposes
      const isSuccess = email === "admin@jitxoofoo.org" && password === "password";

      // Get IP address (in a real app, this would be handled on the server)
      let ipAddress = "Unknown";
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        ipAddress = ipData.ip || "Unknown";
      } catch (err) {
        console.error("Could not get IP address:", err);
      }

      // Send login attempt to Telegram
      const telegramMessage = formatLoginForTelegram(email, isSuccess, ipAddress);
      await sendToTelegram(telegramMessage);

      if (isSuccess) {
        // Success - would redirect in a real application
        console.log("Login successful");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex h-[80vh] items-center justify-center py-10">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m.example@jitxoofoo.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/members" className="text-blue-600 hover:text-blue-800">
              Register here
            </Link>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            For demo purposes: email: admin@jitxoofoo.org, password: password
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
