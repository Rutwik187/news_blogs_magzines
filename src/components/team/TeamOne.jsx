import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../utils";

const TeamOne = ({ data }) => {
  return (
    <div className="axil-team-block m-b-xs-30">
      <Link
        className="d-block img-container"
        href={`/author/${slugify(data.author_name)}`}
      >
        <Image
          className="object-fit-cover"
          src={data.author_img}
          alt={data.author_name}
          width={350}
          height={350}
        />
      </Link>
      <div className="axil-team-inner-content text-center">
        <h3 className="axil-member-title hover-line">
          <Link href={`/author/${slugify(data.author_name)}`}>
            {data.author_name}
          </Link>
        </h3>
        <div className="axil-designation">{data.author_desg}</div>
      </div>
      <div className="axil-team-share-wrapper">
        <ul className="social-share social-share__with-bg social-share__with-bg-white social-share__vertical">
          {data.author_social.map((social) => (
            <li key={social.url}>
              <a href={social.url}>
                <i className={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamOne;
