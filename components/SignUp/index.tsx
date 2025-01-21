"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { updateForm } from "@/slice/formData";
import { useRouter } from "next/navigation";

interface SignupProps {
  countries: any[];
  countryOptions: { name: string }[];
}

const formSchema = z.object({
  firstName: z
    .string()
    .regex(/^[a-zA-Z\s'-]+$/, "Invalid name pattern")
    .min(2, "First name must be at least 2 characters"),
  lastName: z
    .string()
    .regex(/^[a-zA-Z\s'-]*$/, "Invalid name pattern")
    .optional(),
  country: z.string().min(1, "Country cannot be null"),
});

type FormData = z.infer<typeof formSchema>;

const SignUp: React.FunctionComponent<SignupProps> = ({
  countryOptions,
  countries,
}): React.ReactElement => {
  const formValuesSelector = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
    },
  });

  const homeSubmitHandler = (data: FormData) => {
    const countryData = countries.filter((country: any) => {
      return data.country === country.name.common;
    });

    dispatch(
      updateForm({
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        countryData: countryData[0],
      })
    );
    router.push("/price");
  };

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
      <form
        className={styles.form}
        onSubmit={handleSubmit(homeSubmitHandler)}
      >
        <div className={styles.form__flex_container}>
          <div className={styles.form__group}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className={styles.signup__error}>{errors.firstName.message}</p>
            )}
          </div>
          <div className={styles.form__group}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className={styles.signup__error}>{errors.lastName.message}</p>
            )}
          </div>
          <div className={styles.form__group}>
            <label htmlFor="country">Country</label>
            <select
              id="country"
              required
              defaultValue=""
              {...register("country")}
            >
              <option
                disabled
                hidden
                value=""
              >
                Select your country
              </option>
              {countryOptions.map((country: any) => {
                return (
                  <option
                    key={country.name}
                    value={country.name}
                  >
                    {country.name}
                  </option>
                );
              })}
            </select>
            {errors.country && (
              <p className={styles.signup__error}>{errors.country.message}</p>
            )}
          </div>
        </div>
        <div className={styles.form__button_container}>
          <Button
            text="continue"
            type="primary"
            buttonType="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
