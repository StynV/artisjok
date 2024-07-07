import Fotos from "@/components/Fotos/Fotos";

export default async function FotosPage() {
  return (
    <section className="min-h-screen bg-white pt-28 md:pl-40 pl-10 md:pr-40 pr-10 pb-28">
      <h1 className="md:text-9xl lg:text-4xl text-2xl md:mb-10 mb-6 text-black">
        Voorstelling 25 Juni 2024
      </h1>

      <Fotos />
    </section>
  );
}
