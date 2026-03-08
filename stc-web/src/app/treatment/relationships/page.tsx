import DiagnosisPage from "../components/DiagnosisPage";
import { pages } from "../content";
import { buildMetadata } from "../pageUtils";

const page = pages["relationships-hub"];

export const metadata = buildMetadata(page);

export default function RelationshipsPage() {
  return <DiagnosisPage page={page} />;
}
