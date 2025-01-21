"use client";

import styles from "../styles.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { updateForm, clearForm } from "@/slice/formData";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  price: z
    .number()
    .positive("Price must be positive")
    .min(1, "Price must be at least 0.01"),
});

type FormData = z.infer<typeof formSchema>;

const PriceForm: React.FunctionComponent = (): React.ReactElement => {
  const formValuesSelector = useSelector((state: RootState) => state.form);
  const symbol: any = formValuesSelector.countryData
    ? Object.values(formValuesSelector.countryData.currencies)[0]
    : "";

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
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

  const priceSubmitHandler = (data: FormData) => {
    dispatch(updateForm({ price: data.price }));
    router.push("/results");
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
            <span className={styles.form__input_icon}>{symbol.symbol}</span>
          </div>
        </div>
        <div className={styles.form__button_container}>
          <Button
            text="back"
            type="secondary"
            buttonType="button"
            clicked={() => {
              router.push("/");
            }}
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
