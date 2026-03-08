import DiagnosisPage from "../components/DiagnosisPage";
import { pages } from "../content";
import { buildMetadata } from "../pageUtils";

const page = pages["addiction-hub"];

export const metadata = buildMetadata(page);

export default function AddictionPage() {
  return <DiagnosisPage page={page} />;
}
