import React, { createContext, useContext, useState } from "react";
import { ISnippet } from "../types/snippet";

// type ISnippetDetailContext = {
//   selectedSnippet: ISnippet | undefined;
// };

// const SnippetDetailContext = React.createContext<ISnippetDetailContext | null>({
//   selectedSnippet: undefined,
// });

// export const useSnippetDetailContext = () => {
//   const context = React.useContext(SnippetDetailContext);

//   if (!context) {
//     throw new Error(
//       "Snippet detail must be rendered as a child of the CollectionSnippetDetail component"
//     );
//   }

//   return context;
// };

// export default SnippetDetailContext;

interface SnippetDetailContextType {
  selectedSnippet?: ISnippet | undefined;
  selectSnippet?: (_snippet: ISnippet) => void;
}

const SnippetDetailContext = createContext<SnippetDetailContextType>({
  selectedSnippet: undefined,
  selectSnippet: () => {},
});

export const useSnippetDetail = () => {
  const context = useContext(SnippetDetailContext);
  if (!context) {
    throw new Error(
      "useSnippetDetail must be used within a SnippetDetailProvider"
    );
  }
  return context as Required<SnippetDetailContextType>;
};

export const SnippetDetailProvider = ({
  children,
}: {
  children?: React.ReactElement;
}) => {
  const [selectedSnippet, setSelectedSnippet] = useState<
    ISnippet | undefined
  >();

  const selectSnippet = (_snippet: ISnippet) => {
    setSelectedSnippet(_snippet);
  };

  return (
    <SnippetDetailContext.Provider value={{ selectedSnippet, selectSnippet }}>
      {children}
    </SnippetDetailContext.Provider>
  );
};
