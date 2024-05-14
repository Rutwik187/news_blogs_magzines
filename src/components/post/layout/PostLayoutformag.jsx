import Image from "next/image";
import Link from "next/link";

const PostLayoutformag = ({ data }) => {
  return (
    <div className="post-container">
      <Link href={`/magazine/${data.slug.current}`}>
        <div className="image-container">
          <Image
            src={data.featureImg}
            alt={data.title}
            width={1000}
            height={1000}
            className="img-fluid"
          />
        </div>
      </Link>
      <div className="title-container">
        <h4
          className="hover-line hover-line"
          style={{ marginTop: "2rem", fontSize: "1.3rem" }}
        >
          <Link href={`/magazine/${data.slug.current}`}>{data.title}</Link>
        </h4>
      </div>
      <style jsx>{`
        .post-container {
          position: relative;
          width: 100%;
          margin-top: 20px; /* Adjust margin as needed */
        }

        .image-container {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        .image-container:hover {
          transform: scale(1.1); /* Adjust the scale factor as needed */
          box-shadow: rgba(0, 0, 0, 0.35) 0px 8px 25px;
        }

        .title-container {
          margin-top: 10px; /* Adjust margin as needed */
          text-align: center;
        }

        .title {
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default PostLayoutformag;
