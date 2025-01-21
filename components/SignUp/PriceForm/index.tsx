"use client";

import styles from "../styles.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/Button";

const formSchema = z.object({
  price: z
    .number()
    .positive("Price must be positive")
    .min(1, "Price must be at least 0.01"),
});

type FormData = z.infer<typeof formSchema>;

const PriceForm: React.FunctionComponent = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: 0,
    },
  });

  console.log(errors);

  const priceSubmitHandler = (data: FormData) => {
    console.log("Form data:", data);
    alert(JSON.stringify(data));
  };

  return (
    <div className={styles.signup}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(priceSubmitHandler)}
      >
        <div className={styles.form__flex_container}>
          <div className={styles.form__group}>
            <label htmlFor="price">Watch Price</label>
            <input
              id="price"
              type="number"
              placeholder="Enter your watch price"
              required
              className={styles.input_with_icon}
              {...register("price", { valueAsNumber: true })}
            />
            <span className={styles.form__input_icon}>$</span>
          </div>
        </div>
        <div className={styles.form__button_container}>
          <Button
            text="back"
            type="secondary"
            buttonType="button"
            clicked={() => alert("test")}
          />
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

export default PriceForm;
