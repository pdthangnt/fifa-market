// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// hooks
import useAuth from "./hooks/useAuth";
// components
import Settings from "./components/settings";
import RtlLayout from "./components/RtlLayout";
import ScrollToTop from "./components/ScrollToTop";
import NotistackProvider from "./components/NotistackProvider";
import ThemePrimaryColor from "./components/ThemePrimaryColor";
import ThemeLocalization from "./components/ThemeLocalization";
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";
import LoadingScreen, { ProgressBarStyle } from "./components/LoadingScreen";
import "./App.css";

// ----------------------------------------------------------------------

export default function App() {
  const { isInitialized } = useAuth();

  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
          <RtlLayout>
            <NotistackProvider>
              <GlobalStyles />
              <ProgressBarStyle />
              <BaseOptionChartStyle />
              {/* <Settings /> */}
              <ScrollToTop />
              <Router />
            </NotistackProvider>
          </RtlLayout>
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
