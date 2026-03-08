import DiagnosisPage from "../../components/DiagnosisPage";
import { pages } from "../../content";
import { buildMetadata } from "../../pageUtils";

const page = pages["relationships-group"];

export const metadata = buildMetadata(page);

export default function RelationshipsGroupPage() {
  return <DiagnosisPage page={page} />;
}
