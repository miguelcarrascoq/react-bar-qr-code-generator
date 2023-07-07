'use client'

var Barcode = require('react-barcode');

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Barcode value="14.133.612-6" displayValue="true" />
      </div>
    </main>
  )
}
