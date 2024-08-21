import "./App.css";

import { DefinitionTooltip } from "@carbon/react/es/components/Tooltip/DefinitionTooltip";
import "@carbon/react/scss/components/tooltip/_index.scss";

export default function App() {
  return (
    <>
      <DefinitionTooltip
        openOnHover={false}
        definition="This is the definition"
      >
        Term
      </DefinitionTooltip>
    </>
  );
}
