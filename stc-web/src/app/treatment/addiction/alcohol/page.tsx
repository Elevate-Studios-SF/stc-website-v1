import DiagnosisPage from "../../components/DiagnosisPage";
import { pages } from "../../content";
import { buildMetadata } from "../../pageUtils";

const page = pages["alcohol"];

export const metadata = buildMetadata(page);

export default function AlcoholPage() {
  return <DiagnosisPage page={page} />;
}
