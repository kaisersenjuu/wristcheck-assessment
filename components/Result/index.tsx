"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import axios from "axios";
import Button from "../Button";

const Result: React.FunctionComponent = (): React.ReactElement => {
  const [avatarError, setAvatarError] = useState<boolean>(false);
  const avatarURL = "https://api.dicebear.com/9.x/big-smile/svg?seed=felix";

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
        {`Welcome <firstName> <lastName> from <country>
and their watch worth <currency><amount>!
`}
      </h3>
      <div className={styles.result__button_container}>
        <Button
          text="Reset"
          type="secondary"
        />
      </div>
    </div>
  );
};

export default Result;
