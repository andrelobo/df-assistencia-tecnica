type SectionTitleProps = {
  title: string;
  subtitle?: string; // Adicione a propriedade subtitle como opcional
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle, // Adicione subtitle aqui
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      {subtitle && ( // Renderize o subtitle se ele existir
        <h3 className="text-xl font-medium text-gray-600">{subtitle}</h3>
      )}
      {paragraph && (
        <p className="text-base text-body-color md:text-lg">{paragraph}</p>
      )}
    </div>
  );
};

export default SectionTitle;
