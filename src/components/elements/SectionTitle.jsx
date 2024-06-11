import Link from "next/link";

const SectionTitle = ({ title, btnText, btnUrl, pClass }) => {
  return (
    <div className={`section-title ${pClass ?? "m-b-xs-40"}`}>
      <h2 className="axil-title">{title}</h2>
      <Link href={btnUrl ?? "#"} className="btn-link d-block d-md-inline-block">
        {btnText}
      </Link>
    </div>
  );
};

export default SectionTitle;
