import React from "react";
import {
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/react";
import {
  personCircle,
  search,
  helpCircle,
  star,
  create,
  ellipsisHorizontal,
  ellipsisVertical,
} from "ionicons/icons";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Naviation() {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol className="">
              <IonTitle>
                <NavLink to="/posts">Posts</NavLink>
              </IonTitle>
            </IonCol>
            <IonCol className="ion-text-right">
              <NavLink to="/new-post">
                <IonButton color="success">Add New Post</IonButton>
              </NavLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
}
export default Naviation;
