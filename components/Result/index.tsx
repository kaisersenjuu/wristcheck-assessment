"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import axios from "axios";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { clearForm } from "@/slice/formData";
import { useRouter } from "next/navigation";

const Result: React.FunctionComponent = (): React.ReactElement => {
  const formValuesSelector = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const symbol: any = formValuesSelector.countryData
    ? Object.values(formValuesSelector.countryData.currencies)[0]
    : "";

  const [avatarError, setAvatarError] = useState<boolean>(false);
  const avatarURL = `https://api.dicebear.com/9.x/big-smile/svg?seed=${formValuesSelector.firstName}`;

  useEffect(() => {
    const getAvatar = async () => {
      try {
        const avatar = await axios.get(avatarURL);
      } catch (err) {
        console.error(err);
        setAvatarError(true);
      }
    };

    getAvatar();
  }, []);

  return (
    <div className={styles.result}>
      <div className={styles.result__avatar_container}>
        <Image
          src={
            !avatarError
              ? avatarURL
              : "https://api.dicebear.com/9.x/big-smile/svg"
          }
          alt="result_avatar"
          width={100}
          height={100}
          unoptimized
        />
      </div>
      <h3>
        {`Welcome ${formValuesSelector.firstName} ${
          formValuesSelector.lastName ? formValuesSelector.lastName : ""
        } from ${formValuesSelector.country}
and their watch worth ${`${symbol.symbol}`}${formValuesSelector.price}!
`}
      </h3>
      <div className={styles.result__button_container}>
        <Button
          text="Reset"
          type="secondary"
          buttonType="button"
          clicked={() => {
            dispatch(clearForm());
            router.push("/");
          }}
        />
      </div>
    </div>
  );
};

export default Result;
