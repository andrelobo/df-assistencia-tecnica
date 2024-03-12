import Image from "next/image";
import SectionTitle from "../Common/SectionTitle"; // Adicionado

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  // Texto sobre a DF Assistência Técnica limitado a 900 caracteres
  const aboutText = "DF Assistência Técnica é uma empresa dedicada a oferecer soluções completas em assistência técnica para eletrônicos, incluindo reparo de smartphones, tablets, computadores e outros dispositivos. Nossa equipe altamente qualificada e experiente garante um serviço rápido, eficiente e confiável. Priorizamos a satisfação do cliente e buscamos sempre superar as expectativas, fornecendo atendimento personalizado e soluções sob medida para cada necessidade. Com uma ampla gama de serviços, incluindo diagnóstico, reparo, manutenção preventiva e suporte técnico, estamos preparados para atender tanto a clientes residenciais quanto a empresas de todos os portes. Conte conosco para manter seus dispositivos funcionando perfeitamente e prolongar sua vida útil. Confie na DF Assistência Técnica para cuidar do seu equipamento com a qualidade e a dedicação que ele merece.";

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="max-w-2xl mx-auto">
        <SectionTitle
          title="Sobre a DF Assistência Técnica"
          subtitle="Conheça nossa empresa"
        />
        <p className="text-lg text-body-color mt-6 lg:w-full">
          {aboutText}
        </p>
      </div>
    </section>
  );
};

export default AboutSectionOne;
