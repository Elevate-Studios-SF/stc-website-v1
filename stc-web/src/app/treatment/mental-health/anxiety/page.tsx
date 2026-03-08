import DiagnosisPage from "../../components/DiagnosisPage";
import { pages } from "../../content";
import { buildMetadata } from "../../pageUtils";

const page = pages["anxiety"];

export const metadata = buildMetadata(page);

export default function AnxietyPage() {
  return <DiagnosisPage page={page} />;
}
