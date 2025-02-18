import {
  ContentItemDuo,
  ContentItemMono,
  List,
  SkeletonList,
} from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import "./SkeletonList-demo.scss";

const meta: Meta<typeof SkeletonList> = {
  title: "Components/SkeletonList",
  component: SkeletonList,
};

export default meta;

const Render = ({
  lists,
  ...props
}: ComponentPropsWithoutRef<typeof SkeletonList>) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading((currentIsLoading) => !currentIsLoading);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <SkeletonList
      {...props}
      lists={lists}
      classModifierList="skeleton-list-demo"
      isLoading={isLoading}
    >
      <List classModifier="extra-padding skeleton-list-demo">
        <ContentItemDuo label="Nom" value="Doe" classModifier="large" />
        <ContentItemDuo label="Prénom" value="John" classModifier="large" />
        <ContentItemDuo
          label="Adresse"
          value="4 allée du Châteaux blanc"
          classModifier="large"
        />
        <ContentItemDuo label="Ville" value="Wasquehal" classModifier="large" />
        <ContentItemDuo
          label="Code postal"
          value="59290"
          classModifier="large"
        />
        <ContentItemDuo label="Pays" value="France" classModifier="large" />
        <ContentItemDuo
          label="Date de naissance"
          value="01/01/1970"
          classModifier="large"
        />
        <ContentItemDuo
          label="Poste"
          value="Développeur"
          classModifier="large"
        />
        <ContentItemDuo
          label="Ancienneté"
          value="10 ans"
          classModifier="large"
        />
      </List>
      <List classModifier="extra-padding skeleton-list-demo">
        <ContentItemDuo
          label="Infos complémentaires"
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          classModifier="large"
        />
        <ContentItemDuo
          label="Infos complémentaires"
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          classModifier="large"
        />
        <ContentItemDuo
          label="Infos complémentaires"
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          classModifier="large"
        />
      </List>
      <List classModifier="extra-padding">
        <ContentItemMono secondaryText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque aspernatur ullam officia deserunt temporibus sapiente nam reiciendis iste fugiat harum exercitationem placeat, explicabo aperiam ab nemo aliquam eaque ipsa!">
          Commentaire
        </ContentItemMono>
      </List>
    </SkeletonList>
  );
};

export const Default: StoryObj<typeof SkeletonList> = {
  args: {
    lists: [
      { grid: [[3, 9]], lines: 10 },
      { grid: [[3, 9]], lines: 3 },
      { grid: [[6], [12], [12], [12]] },
    ],
    isLoading: true,
  },
  render: Render,
};
