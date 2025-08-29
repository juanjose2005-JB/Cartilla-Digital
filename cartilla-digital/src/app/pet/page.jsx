"use client";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function PetPage() {
  const [shareLink, setShareLink] = useState("");
  const [qrOpen, setQrOpen] = useState(false);

  function generateToken() {
    const token = Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    const link = `https://cartilla-digital-liart.vercel.app/${token}`;
    setShareLink(link);
    setQrOpen(true);
  }

  return (
    
 <div
      style={{
        display: "flex",
        justifyContent: "center", // centra en horizontal
        alignItems: "center",     // centra en vertical
        height: "100vh",          // ocupa toda la pantalla
      }}
    >
      <div style={{ padding: "70px", fontFamily: "sans-serif", textAlign: "center" }}>
        <p><b>🐾 CARTILLA DIGITAL🐾</b></p>
        <p><b>NOMBRE DE LA MASCOTA:</b> Negro </p>
        <p><b>ESPECIE:</b> Perro </p>
        <p><b>RAZA:</b> Boxer </p>
        <p><b>SEXO:</b> Macho </p>
        <p><b>ID:</b> 0704020</p>

        <p><b>DATOS DEL TUTOR</b></p>
        <p><b>NOMBRES:</b> Dua Lipa  </p>
        <p><b>TELEFONO:</b> 0988048481 </p>
        <p><b>CORREO:</b> dua2020@gmail.com  </p>

        <button
          onClick={generateToken}
          style={{
            marginTop: "25px",
            padding: "12px",
            background: "#197cdfff",
            color: "white",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer"
          }}
        >
          Generar enlace / QR
        </button>

        {qrOpen && (
          <div style={{ marginTop: "20px" }}>
            <input
              value={shareLink}
              readOnly
              style={{ width: "100%", padding: "20px" }}
            />
            <div style={{ marginTop: "20px" }}>
              <QRCodeCanvas value={shareLink} size={190} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}