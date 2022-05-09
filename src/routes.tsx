import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { ROUTES } from "@/constants";

import HomePage from "@/pages/Home";
import NotFoundPage from "@/pages/NotFound";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME()} element={<HomePage />} />
        <Route path={ROUTES.NOT_FOUND()} element={<NotFoundPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;