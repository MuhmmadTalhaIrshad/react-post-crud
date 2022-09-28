// Core Imports
import React from 'react'

// Package Imports
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { RecoilRoot } from 'recoil'

// Custom Imports
import App from './App'

setupIonicReact();

const AppHOCWrapper: React.FC = () => {
  return (
    <>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <RecoilRoot>
              <App />
            </RecoilRoot>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </>
  )
}

export default AppHOCWrapper
