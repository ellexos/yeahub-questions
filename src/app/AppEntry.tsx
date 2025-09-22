import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import store from "@app/providers/store/appStore.ts";
import {RouterProvider} from "react-router-dom";
import {appRouter} from "@app/providers/router/AppRouter.tsx";
import './styles/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <RouterProvider router={appRouter} />
      </Provider>
  </StrictMode>
)
