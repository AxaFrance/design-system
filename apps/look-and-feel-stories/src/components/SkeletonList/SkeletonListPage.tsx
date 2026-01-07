// eslint-disable-next-line import/no-extraneous-dependencies
import { type ComponentProps, useEffect, useState } from "react";
import {
  ContentItemDuo,
  ContentItemMono,
  List,
  SkeletonList,
} from "@axa-fr/canopee-react/client";
import "./SkeletonList.stories.scss?inline";

export const SkeletonListPage = ({
  lists,
  ...props
}: ComponentProps<typeof SkeletonList>) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading((currentIsLoading) => !currentIsLoading);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <section className="skeleton-list-page">
      <SkeletonList {...props} lists={lists} isLoading={isLoading}>
        <List>
          <ContentItemDuo label="Nom" value="Doe" size="large" />
          <ContentItemDuo label="Prénom" value="John" size="large" />
          <ContentItemDuo
            label="Adresse"
            value="4 allée du Châteaux blanc"
            size="large"
          />
          <ContentItemDuo label="Ville" value="Wasquehal" size="large" />
          <ContentItemDuo label="Code postal" value="59290" size="large" />
          <ContentItemDuo label="Pays" value="France" size="large" />
          <ContentItemDuo
            label="Date de naissance"
            value="01/01/1970"
            size="large"
          />
          <ContentItemDuo label="Poste" value="Développeur" size="large" />
          <ContentItemDuo label="Ancienneté" value="10 ans" size="large" />
        </List>
        <List>
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
        <List>
          <ContentItemMono
            title="Commentaire"
            type="stick"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque aspernatur ullam officia deserunt temporibus sapiente nam reiciendis iste fugiat harum exercitationem placeat, explicabo aperiam ab nemo aliquam eaque ipsa!"
          />
        </List>
      </SkeletonList>
    </section>
  );
};
