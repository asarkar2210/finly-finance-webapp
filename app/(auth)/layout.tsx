import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image 
            src="/icons/auth-image.png"
            alt="Auth image"
            width={5000}
            height={5000}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
