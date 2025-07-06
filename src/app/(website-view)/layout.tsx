
import Header from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main className=" min-h-screen  bg-[#FDFBFF] top-0  mx-auto " >
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
