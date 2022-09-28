import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
  IonApp
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./pagesCSS/AllPosts.module.css";

const DUMMY_POSTS = [
  {
    id: 1,
    title: "React",
    description: "React is a JavaScript library for building user interfaces. React is a client-side JavaScript library it helps us write client-side JavaScript code and it’s all about building modern reactive user interfaces for websites. It makes building a modern, rich, complex user interface easier and it does so, by giving us a higher-level syntax, where we write code in a declarative way, in a declarative component-focused way, we define what we wanna have on the screen, what the end goal is we create these custom HTML elements and React will do the rest. React allows you to create **reusable** and **reactive components** consisting of **HTML** and **JavaScript** (and **CSS**).",
    tags: "react,JSLaibrary,laibrary,clien-side",
    Image:
      "https://blog.logrocket.com/wp-content/uploads/2022/01/How-to-create-glassmorphism-effect-React.png",
    author: "Max",
  },
  {
    id: 2,
    title: "JavaScript",
    description:
      "JAVASCRIPT IS A HIGH-LEVEL, OBJECT-ORIENTED, MULTI-PARADIGM PROGRAMMING LANGUAGE.",
    tags: "object-oriented,programmng,high-level",
    Image:
      "https://image.shutterstock.com/image-vector/javascript-programming-language-script-code-260nw-1062509657.jpg",
    author: "bobby",
  },
  {
    id: 3,
    title: "Ionic",
    description: "Ionic is a  a web component library.",
    tags: "object-oriented,programmng,high-level",
    Image:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_8836234a09e6574906f74289d77dd6c0/ionic.png",
    author: "Ionic Team 😉",
  },
];

const AllPosts = () => {
  return (
    <IonApp className="mt-1">
      <IonHeader>
        <IonToolbar className="ion-text-center">
          <IonTitle>All Post</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
        <IonRow className={`${classes.tableHead} ion-margin-top`}>
            <IonCol size="1">#</IonCol>
            <IonCol size="2">Author</IonCol>
            <IonCol size="2">Title</IonCol>
            <IonCol size="3">Discription</IonCol>
            <IonCol size="2">Tags</IonCol>
            <IonCol className="ion-padding-start">Delete</IonCol>
        </IonRow>
        {DUMMY_POSTS.map(post => (
            <IonRow className={`${classes.tableCol}`} key={post.id}>
                <IonCol size="1">{post.id}</IonCol>
                <IonCol size="2">{post.author}</IonCol>
                <IonCol size="2"><Link className={classes.view} to={`/posts/${post.id}`}>{post.title}</Link></IonCol>
                <IonCol size="3">{post.description.substring(0, 30) + '...'}</IonCol>
                <IonCol size="2">{post.tags.replaceAll(',' , ' ').substring(0, 20) + '...'}</IonCol>
                <IonCol><IonButton color="danger">Delete</IonButton></IonCol>
            </IonRow>
        ))}

        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default AllPosts;
