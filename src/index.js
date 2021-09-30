import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  VideoProvider,
  HistoryProvider,
  WatchLaterProvider,
  LikedVideosProvider,
  DislikedVideosProvider,
  PlaylistsProvider,
  LoaderProvider,
  ToastProvider,
} from "./Contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoaderProvider>
        <ToastProvider>
          <AuthProvider>
            <VideoProvider>
              <HistoryProvider>
                <LikedVideosProvider>
                  <PlaylistsProvider>
                    <DislikedVideosProvider>
                      <WatchLaterProvider>
                        <App />
                      </WatchLaterProvider>
                    </DislikedVideosProvider>
                  </PlaylistsProvider>
                </LikedVideosProvider>
              </HistoryProvider>
            </VideoProvider>
          </AuthProvider>
        </ToastProvider>
      </LoaderProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
