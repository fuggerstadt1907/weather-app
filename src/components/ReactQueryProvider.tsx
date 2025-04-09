"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: ReactNode;
};

const ReactQueryProvider: React.FC<Props> = ({ children }) => {
  const [client] = useState(() => new QueryClient()); // takes care, that QueryClient gets initialized only once

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
