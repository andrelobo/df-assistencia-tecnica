const SectionTitle = ({
  title,
  subtitle, // Adicione o subtitle aqui
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  subtitle?: string; // Marque subtitle como opcional
  paragraph?: string; // Mantenha paragraph opcional, caso necessário
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      {subtitle && ( // Renderize o subtitle, se fornecido
        <h3 className="mb-2 text-xl font-semibold text-gray-600 dark:text-gray-300">
          {subtitle}
        </h3>
      )}
      {paragraph && ( // Renderize o paragraph, se fornecido
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
