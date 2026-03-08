import DiagnosisPage from "../components/DiagnosisPage";
import { pages } from "../content";
import { buildMetadata } from "../pageUtils";

const page = pages["mental-health-hub"];

export const metadata = buildMetadata(page);

export default function MentalHealthPage() {
  return <DiagnosisPage page={page} />;
}
