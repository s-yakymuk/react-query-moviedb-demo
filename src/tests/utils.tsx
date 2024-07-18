import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { render } from "@testing-library/react";

const queryClient = new QueryClient();

const customRender = (ui: React.ReactNode) =>
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <QueryParamProvider
          adapter={ReactRouter6Adapter}
          options={{ removeDefaultsFromUrl: true }}
        >
          {ui}
        </QueryParamProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );

export * from "@testing-library/react";
export { customRender as render };
