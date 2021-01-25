import { delBasePath } from "next/dist/next-server/lib/router/router";
import styled from "styled-components";
import db from "../db.json";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return <div style={{ backgroundImage: `url(${db.bg})`}}></div>;
}
