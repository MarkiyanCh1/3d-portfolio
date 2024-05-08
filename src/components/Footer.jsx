import { styles } from "../styles";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX},
        "w-full flex justify-center items-center py-8 bg-primary border-t border-t-secondary/5"
      `}
    >
        <p className="text-white text-sm xs:text-base text-center font-bold flex">
          &copy; Markiyan Chornovil {new Date().getFullYear()}. All rights
          reserved.
        </p>
      </div>
  );
};

export default Footer;
