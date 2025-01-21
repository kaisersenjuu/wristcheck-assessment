"use client";

import Container from "@/components/Container";
import SignUp from "@/components/SignUp";
import Wrapper from "@/components/Wrapper";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState<any>([]);
  const [options, setOptions] = useState<{ name: string }[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesFetch = await axios.get(
          "https://restcountries.com/v3.1/all"
        );

        setCountries([...countriesFetch.data]);

        const filtered = countriesFetch.data.map((country: any) => {
          return { name: country.name.common };
        });

        setOptions([...filtered]);
      } catch (err) {
        console.error(err, "something went wrong with fetching countries");
      }
    };

    fetchCountries();
  }, []);
  return (
    <div>
      <main>
        <Container>
          <Wrapper>
            <SignUp
              countryOptions={options}
              countries={countries}
            />
          </Wrapper>
        </Container>
      </main>
    </div>
  );
}
