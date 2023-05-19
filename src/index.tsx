/* @refresh reload */
import { render } from 'solid-js/web';

import {Navigate, Route, Router, Routes} from "@solidjs/router";
import HomePages from "./pages/home/home.pages";
import PlayPages from "./pages/play/play.pages";
import HelpPages from "./pages/help/help.pages";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={HomePages} />
      <Route path="/play" component={PlayPages} />
      <Route path="/help" component={HelpPages} />
      <Route path="*" element={<Navigate href={"/"} />} />
    </Routes>
  </Router>
), root!);
