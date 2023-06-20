import ButtonLink from "components/ButtonLink/ButtonLink";

export const CallToActionButton = ({
  buttonLabel,
  align = left,
  destination,
}) => {
  const alignMap = {
    left: "text-align",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} label={buttonLabel} />
    </div>
  );
};
