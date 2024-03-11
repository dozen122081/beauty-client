import Aboutus from "./_components/Aboutus/Aboutus";
import Benifits from "./_components/Benifits/Benifits";
import BookingForm from "./_components/BookingForm/BookingForm";
import Hero from "./_components/Hero/Hero";
import Services from "./_components/Services/Services";
import Testemonials from "./_components/Testemonials/Testemonials";

export default function Home() {
  return (
   <div className="flex flex-col gap-10">
    <section>
      <Hero />
    </section>
    <section>
      <Aboutus />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <Benifits />
    </section>
    <section>
      <Testemonials />
    </section>
    <section>
      <BookingForm />
    </section>
   </div>
  );
}
