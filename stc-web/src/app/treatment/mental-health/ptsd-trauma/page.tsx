import DiagnosisPage from "../../components/DiagnosisPage";
import { pages } from "../../content";
import { buildMetadata } from "../../pageUtils";

const page = pages["ptsd-trauma"];

export const metadata = buildMetadata(page);

export default function PtsdTraumaPage() {
  return <DiagnosisPage page={page} />;
}
