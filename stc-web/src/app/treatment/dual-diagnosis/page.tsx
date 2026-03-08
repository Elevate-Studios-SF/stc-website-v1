import DiagnosisPage from "../components/DiagnosisPage";
import { pages } from "../content";
import { buildMetadata } from "../pageUtils";

const page = pages["dual-diagnosis-hub"];

export const metadata = buildMetadata(page);

export default function DualDiagnosisPage() {
  return <DiagnosisPage page={page} />;
}
