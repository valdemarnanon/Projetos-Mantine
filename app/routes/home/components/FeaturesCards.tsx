import {
  IconCookie,
  IconMoneybag,
  IconPremiumRights,
  IconCalculator,
} from "@tabler/icons-react";
import {
  Card,
  Container,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import classes from "./FeaturesCards.module.css";

import { Link } from "react-router";

const mockdata = [
  {
    id: "calculadora",
    title: "Calculadora",
    description: "Cálculadora faz cálculos.",
    icon: IconCalculator,
  },
  {
    id: "calculadoraGorjeta",
    title: "Calculadora de gorjetas",
    description: "Calculadora que cálcula o valor da porcentagem da gorjeta.",
    icon: IconPremiumRights,
  },
  {
    title: "",
    description: "",
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={{
          pathname: feature.id,
        }}
      >
        <feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Link>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Calculadoras
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Alguns projetos de cálculos
      </Text>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
