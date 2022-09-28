//  Core Imports
import React from "react";

// Packages Imports
import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useSetRecoilState } from "recoil";
import { postsDataState } from "../recoilstate/postState";
// import { object, string, number, date, InferType } from 'yup';
import * as yup from "yup";
import { Formik } from "formik";

// Custom Imports

const CreatePost: React.FC = () => {
  const setPostsData = useSetRecoilState(postsDataState);

  const postSchema = yup.object({
    title: yup.string().required("Title is required"),
    discription: yup
      .string()
      .nullable()
      .min(20, "Description should be of minimum 8 characters length")
      .max(500, "Description should be of maximum 500 characters length")
      .required("Description is required"),
    author: yup.string()
    .nullable().required("Author is required"),
    tags: yup.string().required("Tags are required minimum 3 tags")
  });

  return (
    <IonApp className="mt-1">
      <IonHeader className="">
        <IonToolbar className="ion-text-center">
          <IonTitle>Create Post</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Formik
          initialValues={{
            title: null,
            author: null,
            discription: null,
            tags: null,
          }}
          validationSchema={postSchema}
          onSubmit={(values) => {
            alert(values.title);
          }}
        >
          {(formikProps) => (
            <IonGrid>
              <form onSubmit={formikProps.handleSubmit}>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Title</IonLabel>
                      <IonInput
                        type="text"
                        name="title"
                        value={formikProps.values.title}
                        onIonChange={formikProps.handleChange}
                      ></IonInput>
                    </IonItem>
                    <p className="error">
                      {formikProps.touched.title && formikProps.errors.title}
                    </p>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Author</IonLabel>
                      <IonSelect
                        name="author"
                        value={formikProps.values.author}
                        onIonChange={formikProps.handleChange}
                        
                      >
                        <IonSelectOption value="ahsan">Ahsan</IonSelectOption>
                        <IonSelectOption value="asad">Asad</IonSelectOption>
                        <IonSelectOption value="talha">Talha</IonSelectOption>
                        <IonSelectOption value="random">Random</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                    <p className="error">
                      {formikProps.touched.author && formikProps.errors.author}
                    </p>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Tags</IonLabel>
                      <IonInput
                        type="text"
                        name="tags"
                        value={formikProps.values.tags}
                        placeholder="Maximum 3 tags, comma sparated"
                        onIonChange={formikProps.handleChange}
                      ></IonInput>
                    </IonItem>
                    <p className="error">
                      {formikProps.touched.tags && formikProps.errors.tags}
                    </p>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Discription</IonLabel>
                      <IonTextarea
                        rows={6}
                        name="discription"
                        value={formikProps.values.discription}
                        placeholder="Enter description here..."
                      >{formikProps.values.discription}</IonTextarea>
                      <br />
                      <IonText>3/500</IonText>
                    </IonItem>
                    <p className="error">
                      {formikProps.touched.discription &&
                        formikProps.errors.discription}
                    </p>
                  </IonCol>
                </IonRow>
                <IonButton type="submit">SAVE</IonButton>
              </form>
            </IonGrid>
          )}
        </Formik>
      </IonContent>
      {/* <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Title</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Author</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Tags</IonLabel>
                <IonInput placeholder="Enter comma sparated tags"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Discription</IonLabel>
                <IonTextarea
                  rows={6}
                  placeholder="Enter any description here..."
                ></IonTextarea>
                <br />
                <IonText>3/500</IonText>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton onClick={() => {}}>Create</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent> */}
    </IonApp>
  );
};

export default CreatePost;
