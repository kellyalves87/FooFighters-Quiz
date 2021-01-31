/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from '../src/components/Head';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// função feita em JS puro para definir estilos na página
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <Head title={db.title} bg={db.bg} description={db.description} />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <Widget.Form>
                <h1>Digite seu nome para começar!</h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    router.push(`/quiz?name=${name}`);
                  }}
                >
                  <Input
                    name="userName"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Seu nome"
                    required
                    value={name}
                  />
                  <Button type="submit" disabled={name.length === 0}>{`bora jogar ${name}?`}</Button>
                </form>
              </Widget.Form>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/kellyalves87" />
      </QuizBackground>
    </>
  );
}
