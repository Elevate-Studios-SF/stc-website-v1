import DiagnosisPage from "../../components/DiagnosisPage";
import { pages } from "../../content";
import { buildMetadata } from "../../pageUtils";

const page = pages["mental-health-group"];

export const metadata = buildMetadata(page);

export default function MentalHealthGroupPage() {
  return <DiagnosisPage page={page} />;
}
