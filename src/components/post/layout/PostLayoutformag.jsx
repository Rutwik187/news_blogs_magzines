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
        <div className="line" />
        <h4
          className="hover-line hover-line"
          style={{ marginTop: "2rem", fontSize: "1.3rem", color: "#101820" }}
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
          box-shadow: #ae8625 2px 2px 5px 5px;
        }

        .image-container:hover {
          transform: scale(1.1); /* Adjust the scale factor as needed */
          box-shadow: #ae8625 0px 0px 8px 0px;
        }

        .title-container {
          margin-top: 10px; /* Adjust margin as needed */
          text-align: center;
          position: relative;
        }

        .line {
          width: 18rem;
          height: 4px;
          background-color: #101820;
          margin: 3rem auto; /* Adjust margin as needed */
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
