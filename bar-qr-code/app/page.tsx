'use client'

var Barcode = require('react-barcode');
import QRCode from "react-qr-code";

export default function Home() {

  const rut = '11.222.333-9';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Barcode value={rut} displayValue="true" />
        <QRCode value={rut} />
      </div>
    </main>
  )
}
