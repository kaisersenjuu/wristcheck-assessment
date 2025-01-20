import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "../Button";

const SignUp: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className={styles.signup}>
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
        <div className={styles.form__flex_container}>
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
                hidden
                value=""
              >
                Select your country
              </option>
              <option value="PH">Philippines</option>
            </select>
          </div>
        </div>
        <div className={styles.form__button_container}>
          <Button
            text="continue"
            type="primary"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
