import DiagnosisPage from "../../components/DiagnosisPage";
import { pages } from "../../content";
import { buildMetadata } from "../../pageUtils";

const page = pages["depression"];

export const metadata = buildMetadata(page);

export default function DepressionPage() {
  return <DiagnosisPage page={page} />;
}
