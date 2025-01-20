import Image from "next/image";
import styles from "./styles.module.scss";

const SignUp: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div>
      <div className={styles.banner_container}>
        <Image
          src="/homepage_banner.png"
          alt="homepage_banner"
          style={{ objectFit: "contain" }}
          fill
          priority
        />
      </div>
      <form className={styles.form}>
        <div className={styles.form__group}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            required
            defaultValue=""
            // onChange={() => {}}
          >
            <option
              disabled
              // selected
              hidden
              value=""
            >
              Select your country
            </option>
            <option value="PH">Philippines</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
