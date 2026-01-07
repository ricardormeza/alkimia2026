import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f8f8f8]">
      <Header active="nosotros" />
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <p className="text-lg">Proximamente</p>
      </main>
      <Footer />
    </div>
  );
}
