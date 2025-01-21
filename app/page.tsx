"use client";

import Container from "@/components/Container";
import SignUp from "@/components/SignUp";
import Wrapper from "@/components/Wrapper";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [ipCountry, setIpCountry] = useState("");
  const [countries, setCountries] = useState<any>([]);
  const [options, setOptions] = useState<{ name: string }[]>([]);

  useEffect(() => {
    const fetchCountriesAndIPLocation = async () => {
      try {
        const locationFetch = await axios.get(`http://ip-api.com/json/`);

        setIpCountry(locationFetch.data.country);
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

    fetchCountriesAndIPLocation();
  }, []);
  return (
    <div>
      <main>
        <Container>
          <Wrapper>
            {ipCountry && options.length >= 1 ? (
              <SignUp
                countryOptions={options}
                countries={countries}
                ipCountry={ipCountry}
              />
            ) : (
              <div></div>
            )}
          </Wrapper>
        </Container>
      </main>
    </div>
  );
}
