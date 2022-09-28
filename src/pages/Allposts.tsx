// Core Imports
import React, { useEffect } from "react";

// Package Imports
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
import { Link } from "react-router-dom";
import { useRecoilState } from 'recoil'

// Custom Imports
import classes from "./pagesCSS/AllPosts.module.css";
import { postsDataState } from "../recoilstate/postState";
import { DUMMY_POSTS } from "../data/postsData";
import { PostType } from "../types/postTypes";

const AllPosts: React.FC = () => {
  const [postsData, setPostsData] = useRecoilState<PostType[]>(postsDataState)

  useEffect(() => {
    setPostsData(DUMMY_POSTS)
  }, [])

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
        {postsData.map((post: PostType) => (
          <IonRow className={`${classes.tableCol}`} key={post.id}>
              <IonCol size="1">{post.id}</IonCol>
              <IonCol size="2">{post.author}</IonCol>
              <IonCol size="2"><Link className={classes.view} to={`/posts/${post.id}`}>{post.title}</Link></IonCol>
              <IonCol size="3">{post.description.substring(0, 30) + '...'}</IonCol>
              <IonCol size="2">{post.tags?.replaceAll(',' , ' ').substring(0, 20) + '...'}</IonCol>
              <IonCol><IonButton color="danger">Delete</IonButton></IonCol>
          </IonRow>
        ))}

        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default AllPosts;
