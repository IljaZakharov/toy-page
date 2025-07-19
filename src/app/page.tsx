"use client";

import { useMemo, useEffect, useState } from "react";

const BACKGROUNDS = [
  "/backgrounds/1.jpg",
  "/backgrounds/2.jpg",
  "/backgrounds/3.jpg",
  "/backgrounds/4.jpg",
];

export default function Home() {
  // Pick a random background on each render
  const bg = useMemo(() => {
    const idx = Math.floor(Math.random() * BACKGROUNDS.length);
    return BACKGROUNDS[idx];
  }, []);

  // Quote state
  const [quote, setQuote] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/quote", { method: "POST" })
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      })
      .then((data) => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch quote");
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay for quote */}
      <div style={{
        background: "rgba(0,0,0,0.3)",
        borderRadius: 16,
        padding: 32,
        color: "#fff",
        fontSize: 32,
        fontWeight: 600,
        textShadow: "0 2px 8px #0008",
        minWidth: 320,
        minHeight: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}>
        {loading ? "Loading..." : error ? error : quote}
      </div>
    </div>
  );
}
