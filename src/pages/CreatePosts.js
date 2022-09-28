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
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { postsDataState } from '../recoilstate/postState'

const CreatePost = () => {
  const setPostsData = useSetRecoilState(postsDataState)
  return (
    <IonApp className='mt-1'>
      <IonHeader className=''>
        <IonToolbar className='ion-text-center'>
          <IonTitle>Create Post</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
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
                <IonInput placeholder='Enter comma sparated tags'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Discription</IonLabel>
                <IonTextarea
                  rows={6}
                  placeholder='Enter any description here...'
                ></IonTextarea>
                <br/>
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
      </IonContent>
    </IonApp>
  )
}

export default CreatePost
