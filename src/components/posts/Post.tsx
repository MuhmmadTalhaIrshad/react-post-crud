import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from "ionicons/icons";

type PostComponentProps = {
  title: string
  author: string
  description: string
  image: string
  opional?: string
}

export const Post: React.FC<PostComponentProps> = (props: PostComponentProps) => {
  return (
    <IonCard>
      <IonGrid>
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol size="12" className="ion-margin-start ion-padding-start ion-padding-right">
            <IonCardHeader>
              <IonCardSubtitle>
                <IonCardTitle>
                  <IonText color="primary">
                    <h1>{props.title}</h1>
                  </IonText>
                </IonCardTitle>
                Author: <IonText color="success">{props.author}</IonText>
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{props.description}</IonCardContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default Post;
